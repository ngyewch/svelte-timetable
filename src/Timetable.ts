import moment from 'moment';

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

    addEntity(name: string): Entity {
        let entity = this.getEntity(name);
        if (entity === null) {
            entity = new Entity(name);
            this.entities.push(entity);
            this.entities = [...this.entities];
        }
        return entity;
    }
}

export class Entity {
    name: string;
    entries: Entry[];

    constructor(name: string) {
        this.name = name;
        this.entries = [];
    }

    addEntry(entry: Entry) {
        this.entries.push(entry);
    }
}

export class Entry {
    startTime: string;
    duration: string;
    text: string;
    _startTime: moment.Moment;
    _duration: moment.Duration;

    constructor(startTime: string, duration: string, text) {
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

    getLeft(): string {
        return ((this._startTime.hours() + this._startTime.minutes() / 60) * 100 / 24) + '%';
    }

    getWidth(): string {
        return (this._duration.asHours() * 100 / 24) + '%';
    }
}
