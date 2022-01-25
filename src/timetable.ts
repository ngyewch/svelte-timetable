import {parse} from 'date-fns';
import type {Duration} from 'date-fns';
import * as duration from 'duration-fns';

export class Time {
    _hour: number;
    _minute: number;

    constructor(hour: number, minute: number) {
        if (!Number.isInteger(hour)) {
            throw new TypeError('hour must be an integer')
        }
        if (!Number.isInteger(minute)) {
            throw new TypeError('minute must be an integer')
        }
        this._hour = hour;
        this._minute = minute;
    }

    hours(): number {
        return this._hour;
    }

    minutes(): number {
        return this._minute;
    }

    static fromString(s: string): Time {
        const d = parse(s, "HH:mm", new Date());
        return new Time(d.getHours(), d.getMinutes())
    }
}

export class Group {
    name: string;
    entities: Entity[];

    constructor(name: string) {
        this.name = name;
        this.entities = [];
    }

    getEntity(name: string): Entity | null {
        for (let i = 0; i < this.entities.length; i++) {
            const entity = this.entities[i];
            if (entity.name === name) {
                return entity;
            }
        }
        return null;
    }

    addEntity(entity: Entity): Group {
        this.entities.push(entity);
        return this;
    }
}

export class Entity {
    name: string;
    entries: Entry[];

    constructor(name: string) {
        this.name = name;
        this.entries = [];
    }

    addEntry(entry: Entry): Entity {
        this.entries.push(entry);
        return this;
    }
}

export class Entry {
    startTime: string;
    duration: string;
    text: string;
    _startTime: Time;
    _duration: Duration;

    constructor(startTime: string, durationSpec: string, text: string) {
        this._startTime = Time.fromString(startTime);
        this._duration = duration.parse(durationSpec);
        this.startTime = startTime;
        this.duration = durationSpec;
        this.text = text;
    }

    getLeft(): string {
        return ((this._startTime.hours() + this._startTime.minutes() / 60) * 100 / 24) + '%';
    }

    getWidth(): string {
        let hours = 0;
        if (this._duration.hours) {
            hours += this._duration.hours;
        }
        if (this._duration.minutes) {
            hours += this._duration.minutes / 60;
        }
        if (this._duration.seconds) {
            hours += this._duration.seconds / (60 * 60);
        }
        return (hours * 100 / 24) + '%';
    }
}
