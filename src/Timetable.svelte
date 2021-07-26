<script>
    import moment from 'moment';

    export let options = {};

    let hours = [];
    let groups = [];

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

    export function addEntity(groupName, entityName) {
        const group = addGroup(groupName);
        return group.addEntity(entityName);
    }

    export function addEntry(groupName, entityName) {
        const group = addGroup(groupName);
        const entity = group.addEntity(entityName);
    }

    function getOption(config, key, defaultValue) {
        if (!config || !(key in config) || !config.hasOwnProperty(key)) {
            return defaultValue;
        }
        const value = config[key];
        if ((value === null) || (typeof(value) === 'undefined')) {
            return defaultValue;
        }
        return value;
    }

    function formatHour(hour) {
        const m = moment().hours(hour).minutes(0).seconds(0).milliseconds(0);
        return m.format("HHmm");
    }
</script>

<div class="timetable">
    <div class="label-container">
        <div class="label">
        </div>
        {#each groups as group}
            <div class="label">
            </div>
            {#each group.entities as entity}
                <div class="label">
                    {entity.name}
                </div>
            {/each}
        {/each}
    </div>
    <div class="timeline-container">
        <div class="timeline-header">
            {#each hours as hour}
                <div class="timeline-header-cell">{formatHour(hour)}</div>
            {/each}
        </div>
        {#each groups as group}
            <div class="timeline-group-header">
                <div class="timeline-group-header-content">
                    {group.name}
                </div>
            </div>
            {#each group.entities as entity}
                <div class="timeline">
                    <div class="time-entry" style="width: 10%; left: 10%;">
                        <div class="time-entry-content">
                            boohoo hahaha hahahah this is a long sentence
                        </div>
                    </div>
                </div>
            {/each}
        {/each}
    </div>
</div>