import { Observer } from "./Observer.interface";
import { Restaurant } from "./Restaurant.class";

// For OBSERVER pattern
export class Driver implements Observer {

    private name: string;

    private status: string;

    constructor(name: string) {
        this.name = name;
        this.status = "Disponible para hacer entrega";
    }

    update(restaurant: Restaurant): void {
        if(restaurant.getFood() === "") {
            this.setStatus("Disponible para hacer entrega");
        }
        else {
            this.setStatus(`Domiciliario ${this.name} quiere entregar el producto ${restaurant.getFood()}`);
        }
    }

    getName(): string {
        return this.name;
    }

    getStatus(): string {
        return this.status;
    }

    setStatus(status: string): void {
        this.status = status;
    }

}