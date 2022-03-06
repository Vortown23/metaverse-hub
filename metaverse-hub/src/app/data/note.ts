import { DatePipe } from "@angular/common";

import { Guid } from "guid-typescript";

export class Note {

    private _id: string;
    private _createDate: string;
    private _lastModifiedDate?: string;
    private _message: string;

    constructor( message:string) { 
        this._id = Guid.create().toString();
        this._message = message;
        this._createDate = Date.now().toLocaleString();
    }

    getId() {
        return this._id;
    }

    //note functions
    getMessage() {
        return this._message;
    }

    updateMessage(message: string) {
        this._message = message;
        this._lastModifiedDate = Date.now().toLocaleString();
    }

    //category functions
    getCreateDate() {
        return this._createDate;
    }

    getUpdateDate() {
        return this._lastModifiedDate;
    }
}