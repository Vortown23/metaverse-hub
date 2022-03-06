import { Note } from "../data/note";

export class Card {

    public id: string;
    public image: string;
    public notes: Note[];
    public category: string;//get these from db later
    public url: string;
    public sourceName: string;
    public read: boolean;

    constructor(id: string, image:string, notes:Note[], category: string, url: string, sourceName: string, read: boolean) { 
        this.id = id;
        this.image = image;
        this.notes = notes;
        this.category = category;
        this.url = url;
        this.sourceName = sourceName;
        this.read = read;
    }


    updateImage(image: string) {
        this.image = image;
    }

    addNote(note: Note) {
        this.notes.push(note);
    }

    deleteNote(id: string) {
        this.notes = this.notes.filter(x => x.getId() === id)
    }

    clearNotes() {
        this.notes = [];
    }


    updateCategory(category: string) {
        this.category = category;
    }

    updateRead(read: boolean) {
        this.read = read;
    }
   
    updateUrl(url: string) {
        this.url = url
    }

    updateSourceName(sourceName: string) {
        this.sourceName = sourceName;
    }
}