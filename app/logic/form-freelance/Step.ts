export default class Step {

    constructor(private _id: number, private _title: string, private _inputs: Array<Object>) {}

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get inputs(): Array<Object> {
        return this._inputs;
    }
}