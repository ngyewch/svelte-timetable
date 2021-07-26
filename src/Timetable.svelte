<script>
    import moment from 'moment';
    import ResizeObserver from 'svelte-resize-observer';

    export let options = {};

    let el;
    let hours = [];
    let groups = [];
    let containerWidth = null;
    let labelWidth = null;
    let timelineWidth = null;

    $: {
        let startHour = parseInt(getOption(options, 'startHour', 0));
        let endHour = parseInt(getOption(options, 'endHour', 0));
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

    class Group {

        constructor(name) {
            this.name = name;
            this.entities = [];
        }

        getEntity(name) {
            for (let i = 0; i < this.entities.length; i++) {
                const entity = this.entities[i];
                if (entity.name === name) {
                    return entity;
                }
            }
            return null;
        }

        addEntity(name) {
            let entity = this.getEntity(name);
            if (entity === null) {
                entity = new Entity(name);
                this.entities.push(entity);
                this.entities = [...this.entities];
            }
            return entity;
        }
    }

    class Entity {

        constructor(name) {
            this.name = name;
            this.entries = [];
        }

        addEntry(entry) {
            this.entries.push(entry);
        }
    }

    class Entry {

        constructor(startTime, duration, text) {
            this._startTime = moment(startTime, "HH:mm");
            this._duration = moment.duration(duration);
            if (!this._startTime.isValid()) {
                throw "invalid startTime";
            }
            if (!this._duration.isValid()) {
                throw "invalid duration";
            }
            this.startTime = startTime;
            this.duration = duration;
            this.text = text;
        }

        getLeft() {
            return ((this._startTime.hours() + this._startTime.minutes() / 60) * 100 / 24) + '%';
        }

        getWidth() {
            return (this._duration.asHours() * 100 / 24) + '%';
        }
    }

    function getGroup(groupName) {
        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            if (group.name === groupName) {
                return group;
            }
        }
        return null;
    }

    function addGroup(groupName) {
        let group = getGroup(groupName);
        if (group === null) {
            group = new Group(groupName);
            groups.push(group);
            groups = [...groups];
        }
        return group;
    }

    export function clear() {
        groups = [];
    }

    export function addEntity(groupName, entityName) {
        const group = addGroup(groupName);
        return group.addEntity(entityName);
    }

    export function addEntry(groupName, entityName, entry) {
        const group = addGroup(groupName);
        const entity = group.addEntity(entityName);
        entity.addEntry(new Entry(entry.startTime, entry.duration, entry.text));
    }

    function getOption(config, key, defaultValue) {
        if (!config || !(key in config) || !config.hasOwnProperty(key)) {
            return defaultValue;
        }
        const value = config[key];
        if ((value === null) || (typeof (value) === 'undefined')) {
            return defaultValue;
        }
        return value;
    }

    function formatHour(hour) {
        const m = moment().hours(hour).minutes(0).seconds(0).milliseconds(0);
        return m.format("HHmm");
    }

    function onScroll(scrollLeft) {
        if (!el) {
            return;
        }
        const els = el.getElementsByClassName("group");
        for (let i = 0; i < els.length; i++) {
            const groupEl = els[i];
            groupEl.scrollLeft = scrollLeft;
        }
    }
</script>

<div bind:this={el} class="timetable">
    <ResizeObserver on:resize={e => containerWidth = e.detail.target.clientWidth}/>
    <div class="timetable-container">
        <div class="label-container">
            <ResizeObserver on:resize={e => labelWidth = e.detail.target.clientWidth}/>
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
                 on:scroll={e => onScroll(e.target.scrollLeft)}>
                <div class="timeline-header">
                    {#each hours as hour}
                        <div class="timeline-header-cell">
                            <div>
                                {formatHour(hour)}
                            </div>
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
                                <div class="time-entry" style="left: {entry.getLeft()}; width: {entry.getWidth()};">
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