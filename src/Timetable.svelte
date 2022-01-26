<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    import {format} from 'date-fns';
    import ResizeObserver from 'svelte-resize-observer';

    import type {EntryClickedEvent, Group, Entity, Entry} from './timetable';

    export let startHour: number = 0;
    export let endHour: number = 0;
    export let groups: Group[] = [];

    const dispatch = createEventDispatcher();

    let el: HTMLElement;
    let hours: number[] = [];
    let containerWidth: number | null = null;
    let labelWidth: number | null = null;
    let timelineWidth: number | null = null;

    $: {
        if (isNaN(startHour) || (startHour < 0) || (startHour > 23)) {
            startHour = 0;
        }
        if (isNaN(endHour) || (endHour < 0) || (endHour > 23)) {
            endHour = 0;
        }
        hours = [];
        let hour = startHour;
        do {
            hours.push(hour);
            hour = (hour + 1) % 24;
        } while ((hour !== endHour) && (hours.length < 24));
    }

    $: {
        if ((containerWidth !== null) && (labelWidth !== null)) {
            timelineWidth = containerWidth - labelWidth;
        }
    }

    function formatHour(hour: number) {
        return format(new Date().setHours(hour, 0, 0, 0), 'HHmm');
    }

    function onScroll(e: Event) {
        if (!el) {
            return;
        }
        const els = el.getElementsByClassName("group");
        for (let i = 0; i < els.length; i++) {
            const groupEl = els[i];
            const target = e.target;
            if (target instanceof HTMLDivElement) {
                groupEl.scrollLeft = target.scrollLeft;
            }
        }
    }

    function onContainerResize(e: CustomEvent) {
        const detail = e.detail;
        if (detail instanceof HTMLDivElement) {
            containerWidth = detail.clientWidth;
        }
    }

    function onLabelResize(e: CustomEvent) {
        const detail = e.detail;
        if (detail instanceof HTMLDivElement) {
            labelWidth = detail.clientWidth;
        }
    }

    function onClick(e: MouseEvent, group: Group, entity: Entity, entry: Entry) {
        const detail: EntryClickedEvent = {
            rightClick: false,
            group: group,
            entity: entity,
            entry: entry,
        };
        dispatch('entryClicked', detail);
    }

    function onContextMenu(e: MouseEvent, group: Group, entity: Entity, entry: Entry) {
        e.preventDefault();
        const detail: EntryClickedEvent = {
            rightClick: true,
            group: group,
            entity: entity,
            entry: entry,
        };
        dispatch('entryClicked', detail);
    }

    function getPopupText(entry: Entry): string {
        return `${entry.getStartTime().toString()} - ${entry.getEndTime().toString()} ${entry.text}`;
    }
</script>

<div bind:this={el} class="timetable">
    <ResizeObserver on:resize={e => onContainerResize(e)}/>
    <div class="timetable-container">
        <div class="label-container">
            <ResizeObserver on:resize={e => onLabelResize(e)}/>
            <div class="header">
            </div>
            <div class="header-padding">
            </div>
            {#each groups as group}
                <div class="row group-header">
                </div>
                {#each group.entities as entity}
                    <div class="row">
                        {entity.name}
                    </div>
                {/each}
            {/each}
        </div>
        <div class="timeline-container">
            <div class="header" style="width: {timelineWidth}px;"
                 on:scroll={e => onScroll(e)}>
                <div class="timeline-header">
                    {#each hours as hour}
                        <div class="timeline-header-cell {hour % 2 ? 'even' : 'odd'}">
                            {formatHour(hour)}
                        </div>
                    {/each}
                </div>
            </div>
            <div class="header-padding">
            </div>
            {#each groups as group}
                <div class="row group-header">
                    <h3>{group.name}</h3>
                </div>
                <div class="group" style="width: {timelineWidth}px;">
                    {#each group.entities as entity}
                        <div class="timeline">
                            {#each entity.entries as entry}
                                <div class="time-entry" style="left: {entry.getLeft()}; width: {entry.getWidth()};"
                                     on:click={(e) => onClick(e, group, entity, entry)}
                                     on:contextmenu={(e) => onContextMenu(e, group, entity, entry)}
                                     title={getPopupText(entry)}>
                                    <div class="time-entry-content">
                                        {entry.text}
                                    </div>
                                </div>
                            {/each}
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .timetable {
        font-family: sans-serif;
        overflow-x: hidden;
        overflow-y: auto;
        max-height: 100vh;
    }

    .timetable .timetable-container {
        display: flex;
        flex-direction: row;
        max-height: fit-content;
    }

    .timetable .label-container {
    }

    .timetable .timeline-container {
        flex-grow: 1;
    }

    /* */

    .timetable .header {
        position: absolute;
        background-color: white;
        z-index: 2;
        height: 50px;
    }

    .timetable .label-container .header {
        width: 100%;
    }

    .timetable .timeline-container .header {
        overflow-x: auto;
    }

    .timetable .timeline-container .header .timeline-header {
        display: flex;
        flex-direction: row;
        width: 1200px;
        height: 100%;
    }

    .timetable .timeline-container .timeline-header .timeline-header-cell {
        display: table-cell;
        width: 50px;
        text-align: center;
        vertical-align: bottom;
        font-size: smaller;
        font-weight: bolder;
        line-height: 50px;
    }

    .timetable .timeline-container .timeline-header .timeline-header-cell.even {
        background-color: #eeeeee;
    }

    .timetable .timeline-container .timeline-header .timeline-header-cell.odd {
        background-color: #dddddd;
    }

    .timetable .header-padding {
        height: 50px;
    }

    /* */

    .timetable .label-container .group-header {
    }

    .timetable .timeline-container .group-header {
        display: flex;
        align-items: baseline;
        margin: 0 0.5em;
    }

    /* */

    .timetable .row {
        height: 50px;
    }

    .timetable .label-container .row {
        display: flex;
        align-items: center;
        vertical-align: middle;
        margin: 0 0.5em;
    }

    .timetable .timeline-container .group {
        overflow-x: hidden;
    }

    .timetable .timeline-container .timeline {
        width: 1200px;
        height: 50px;
        background-repeat: repeat-x;
        background-size: 50px 100%;
    }

    .timetable .timeline-container .timeline:nth-child(odd) {
        /* background-image: url(row1.svg); */
        background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2ZmZmZmZiIvPgogICAgPGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjUwIiBzdHJva2U9IiNjM2MzYzMiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgICA8bGluZSB4MT0iMjUiIHkxPSIwIiB4Mj0iMjUiIHkyPSI1MCIgc3Ryb2tlPSIjZTVlNWU1Ii8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIwIiB4Mj0iNTAiIHkyPSI1MCIgc3Ryb2tlPSIjZTVlNWU1Ii8+CiAgICA8bGluZSB4MT0iNzUiIHkxPSIwIiB4Mj0iNzUiIHkyPSI1MCIgc3Ryb2tlPSIjZTVlNWU1Ii8+CiAgICA8bGluZSB4MT0iMTAwIiB5MT0iMCIgeDI9IjEwMCIgeTI9IjUwIiBzdHJva2U9IiNjM2MzYzMiIHN0cm9rZS13aWR0aD0iMi41Ii8+Cjwvc3ZnPg==);
    }

    .timetable .timeline-container .timeline:nth-child(even) {
        /* background-image: url(row2.svg); */
        background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2Y0ZjRmNCIvPgogICAgPGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjUwIiBzdHJva2U9IiNjM2MzYzMiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgICA8bGluZSB4MT0iMjUiIHkxPSIwIiB4Mj0iMjUiIHkyPSI1MCIgc3Ryb2tlPSIjZTVlNWU1Ii8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIwIiB4Mj0iNTAiIHkyPSI1MCIgc3Ryb2tlPSIjZTVlNWU1Ii8+CiAgICA8bGluZSB4MT0iNzUiIHkxPSIwIiB4Mj0iNzUiIHkyPSI1MCIgc3Ryb2tlPSIjZTVlNWU1Ii8+CiAgICA8bGluZSB4MT0iMTAwIiB5MT0iMCIgeDI9IjEwMCIgeTI9IjUwIiBzdHJva2U9IiNjM2MzYzMiIHN0cm9rZS13aWR0aD0iMi41Ii8+Cjwvc3ZnPg==);
    }

    .timetable .timeline-container .timeline .time-entry {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: 2px;
        height: 44px;
        z-index: 1;
        background-color: #dddddd;
        border-style: solid;
        border-width: 1px;
        border-color: #bbbbbb;
        cursor: pointer;
    }

    .timetable .timeline-container .timeline .time-entry .time-entry-content {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        text-align: center;
        font-size: 10pt;
        color: black;
        user-select: none;
    }
</style>