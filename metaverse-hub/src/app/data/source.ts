import { Note } from "./note";

export class Source {

    private _image: string;
    private _notes: Note[];
    private _category: string;//get these from db later
    private _url: string;
    private _sourceName: string;
    private _read: boolean;

    constructor(image:string, notes:Note[], category: string, url: string, sourceName: string, read: boolean) { 
        this._image = image;
        this._notes = notes;
        this._category = category;
        this._url = url;
        this._sourceName = sourceName;
        this._read = read;
    }

    /* image functions
        1) get
        2) update
    */
    getImage() {
        return this._image
    }

    updateImage(image: string) {
        this._image = image;
    }

    /* note functions
        1) get single
        2) get all
        3) add 
        4) delete
    */
    getNote(id: string) {
        return this._notes.find(x => x.getId());
    }

    getNotes() {
        return this._notes;
    }

    addNote(note: Note) {
        this._notes.push(note);
    }

    deleteNote(id: string) {
        this._notes = this._notes.filter(x => x.getId() === id)
    }

    clearNotes() {
        this._notes = [];
    }

    /* category functions
        1) get
        2) update
    */
    getCategory() {
        return this._category;
    }

    updateCategory(category: string) {
        this._category = category;
    }

    /* read functions
        1) get
        2) update
    */
    getRead() {
        return this._read
    }

    updateRead(read: boolean) {
        this._read = read;
    }
   
    /* url functions
        1) get
        2) update
    */
    getUrl() {
        return this._url
    }

    updateUrl(url: string) {
        this._url = url
    }

    /* source name functions
        1) get
        2) update
    */
    getSourceName() {
        return this._sourceName;
    }

    updateSourceName(sourceName: string) {
        this._sourceName = sourceName;
    }

}