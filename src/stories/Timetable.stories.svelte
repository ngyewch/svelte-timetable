<script lang="ts">
    import {Meta, Template, Story} from "@storybook/addon-svelte-csf";
    import {action} from '@storybook/addon-actions';
    import Timetable from "../Timetable.svelte";
    import {Entity, Entry, Group} from "../timetable";

    const groups = [];

    groups.push(
        new Group('group1')
            .addEntity(new Entity('entity1_1')
                .addEntry(new Entry('05:00', 'PT1H', 'test1 this includes some pretty long detail'))
            )
            .addEntity(new Entity('entity1_2')
                .addEntry(new Entry('07:30', 'PT3H20M', 'test2'))
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
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
        title="Components/Timetable"
        component={Timetable}
        argTypes={{
    startHour: {
      control: {
        type: 'number',
        min: 0,
        max: 23,
        step: 1,
      }
    },
    endHour: {
      control: {
        type: 'number',
        min: 0,
        max: 23,
        step: 1,
      }
    },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <Timetable {...args} on:entryClicked={action('eventClicked')}/>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
        name="General"
        args={{
    groups: groups,
  }}
/>
