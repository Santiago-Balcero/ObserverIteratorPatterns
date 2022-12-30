import { IterableCollection } from "./IterableCollection.interface";
import { Iterator } from "./Iterator.interface";
import { NamesIterator } from "./NamesIterator.class";

// For ITERATOR pattern
export class NamesCollection implements IterableCollection {

    createIterator(): Iterator<string> {
        return new NamesIterator(this);
    }

    private names: string[] = ["Carolina", "Santiago", "Weizman", "Juan"];

    getNames(): string[] {
        return this.names;
    }

}