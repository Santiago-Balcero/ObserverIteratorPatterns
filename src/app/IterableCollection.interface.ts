import { Iterator } from "./Iterator.interface";

// For ITERATOR pattern
export interface IterableCollection {

    createIterator(): Iterator<any>;

}