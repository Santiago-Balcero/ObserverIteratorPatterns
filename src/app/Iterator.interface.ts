// For ITERATOR pattern
export interface Iterator<T> {

    getNext();
    hasMore(): boolean;

}