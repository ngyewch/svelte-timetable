const __resolved__virtual_storySource_srcStoriesTimetableStorySvelte = `<script lang="ts">
    import type {Hst} from '@histoire/plugin-svelte';
    import Timetable from '../Timetable.svelte';
    import {Entity, Entry, Group} from '../timetable';

    export let Hst: Hst;

    const groups = [];

    groups.push(
        new Group('group1')
            .addEntity(new Entity('entity1_1')
                .addEntry(new Entry('05:00', 'PT1H', 'test1 this includes some pretty long detail'))
            )
            .addEntity(new Entity('entity1_2')
                .addEntry(new Entry('07:30', 'PT3H20M', 'test2.1'))
                .addEntry(new Entry('12:00', 'PT2H15M', 'test2.2'))
                .addEntry(new Entry('16:45', 'PT2H', 'test2.3'))
            )
            .addEntity(new Entity('entity1_3'))
    );
    groups.push(
        new Group('group2')
            .addEntity(new Entity('entity2_1'))
            .addEntity(new Entity('entity2_2'))
            .addEntity(new Entity('entity2_3'))
    );
    groups.push(
        new Group('group3')
            .addEntity(new Entity('entity3_1'))
            .addEntity(new Entity('entity3_2'))
            .addEntity(new Entity('entity3_3'))
    );
<\/script>

<Hst.Story group="usage">
    <Timetable groups={groups} on:entryClicked={e => console.log('entryClicked', e)} on:entityClicked={e => console.log('entityClicked', e)}/>
</Hst.Story>
`;
export {
  __resolved__virtual_storySource_srcStoriesTimetableStorySvelte as default
};
