import { Observer } from "./Observer.interface";

// For OBSERVER pattern
export interface Observable {
    subscribeObserver(o: Observer): void;
    unsubscribeObserver(o: Observer): void;
    notify(): void;
}