import { Observer } from "./Observer.interface";
import { Observable } from "./Observable.interface";
import { Driver } from "./Driver.class";

// For OBSERVER pattern
export class Restaurant implements Observable {

    private name: string;

    public foodDeliveryTeam: Driver[] = [];

    private food: string;

    constructor(name: string) {
        this.name = name;
    }

    subscribeObserver(o: Observer): void {
        this.foodDeliveryTeam.push(o as Driver);
    }
    
    unsubscribeObserver(o: Observer): void {
        this.foodDeliveryTeam = this.foodDeliveryTeam.filter(observer => observer !== o);
    }

    notify(): void {
        for (let driver of this.foodDeliveryTeam) {
            driver.update(this);
        }
    }

    getName(): string {
        return this.name;
    }

    getFood(): string {
        return this.food;
    }

    setFood(food: string): void {
        this.food = food;
    }

}