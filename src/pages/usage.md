# Usage

## Basic usage
```example height:800
<script>
    import {onMount} from 'svelte';
    import {Timetable} from 'svelte-timetable';
    
    const nodes = ['A', 'B', 'C'];
    const hostSensors = ['pco2/co2-pro', 'pH/seafet-v2', 'fluorometer/c6p', 'nitrate/?', 'ctd/?', 'weatherstation/?'];
    const guestSensors = ['sensor1/?', 'sensor2/?'];
    const options = {};
    
    let timetable;

    onMount(() => {
        populate();
    });
    
    function refresh() {
        timetable.clear();
        populate();
    }
    
    function populate() {
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            const hostGroup = `${node} / host`;
            const guestGroup = `${node} / guest`;
            populateSensors(hostGroup, hostSensors);
            populateSensors(guestGroup, guestSensors);
        }
    }
    
    function populateSensors(groupName, sensors) {
        for (let j = 0; j < sensors.length; j++) {
            const sensor = hostSensors[j];
            timetable.addEntity(groupName, sensor);
            const hour = Math.floor(Math.random() * 36);
            if (hour < 24) {
                const duration = Math.floor(Math.random() * (24 - hour)) + 1;
                const sampleRate = Math.floor(Math.random() * 10) + 1;
                timetable.addEntry(groupName, sensor, {
                    hour: hour,
                    duration: duration,
                    text: `${sampleRate}m`,
                });
            }
        }
    }    
</script>

<button on:click={() => refresh()}>Refresh</button>
<Timetable bind:this={timetable} options={options}/>
```

## Properties
```properties
options | Options. | Object(undefined)
```
