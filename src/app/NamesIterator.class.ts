import { Iterator } from "./Iterator.interface";
import { NamesCollection } from "./NamesCollection.class";

// For ITERATOR pattern
export class NamesIterator implements Iterator<string> {

    private collection: NamesCollection;

    private index: number = 0;

    constructor(collection: NamesCollection) {
        this.collection = collection;
    }

    getNext(): string {
        if(this.hasMore()) {
            return this.collection.getNames()[this.index++];
        }
        return "No more names in list";
    }

    hasMore(): boolean {
        return this.index < this.collection.getNames().length;        
    }

    reset(): void {
        this.index = 0;
    }
    
}