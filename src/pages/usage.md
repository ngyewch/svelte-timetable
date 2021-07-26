# Usage

## Basic usage
```example height:800
<script>
    import {onMount} from 'svelte';
    import {Timetable} from 'svelte-timetable';
    
    const options = {
        startHour: 0,
        endHour: 0,
    };
    
    let timetable;

    onMount(() => {
        const nodes = ['A', 'B', 'C'];
        const hostSensors = ['pco2/co2-pro', 'pH/seafet-v2', 'fluorometer/c6p', 'nitrate/?', 'ctd/?', 'weatherstation/?'];
        const guestSensors = ['sensor1/?', 'sensor2/?'];
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            for (let j = 0; j < hostSensors.length; j++) {
                const sensor = hostSensors[j];
                timetable.addEntity(`${node} / host`, sensor);
            }
            for (let j = 0; j < guestSensors.length; j++) {
                const sensor = guestSensors[j];
                timetable.addEntity(`${node} / guest`, sensor);
            }
        }
    });
</script>

<Timetable bind:this={timetable} options={options}/>
```

## Properties
```properties
options | Options. | Object(undefined)
```
