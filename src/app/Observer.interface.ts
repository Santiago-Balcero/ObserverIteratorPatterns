import { Observable } from "./Observable.interface";

// For OBSERVER pattern
export interface Observer {
    update(o: Observable): void;
}