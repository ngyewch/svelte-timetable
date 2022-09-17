import Timetable from './Timetable.svelte';
import {Entity, Entry, Group, Time} from './timetable';
import type {EntryClickedEvent, EntityClickedEvent} from './timetable';

export {Entity, Entry, Group, Time, Timetable};
export type {EntryClickedEvent, EntityClickedEvent};
export default Timetable;
