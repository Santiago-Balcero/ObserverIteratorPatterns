import { Component } from '@angular/core';
import { Restaurant } from "./Restaurant.class";
import { Driver } from "./Driver.class";
import { NamesCollection } from './NamesCollection.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ObserverPattern';

  // OBSERVER pattern
  restaurant = new Restaurant("Restaurant");

  deliveryTeam: Driver[] = [
    new Driver("Carolina"), 
    new Driver("Juan"),
    new Driver("Weizman"),
    new Driver("Santiago")
  ];

  food: string = "";

  // To activate template section
  beginDelivery: boolean;

  // Subscribes every Driver to the restaurant
  begin(): void {
    this.beginDelivery = true;
    for(let driver of this.deliveryTeam) {
      this.restaurant.subscribeObserver(driver);
    }
  }

  // Driver begins a delivery and updates it's own state
  // Then after food is set to "", restaurant notifies subscribers that the food is being delivered
  deliverFood(driver: Driver): void {
    if(this.food !== "") {
      driver.setStatus(`Entregando pedido de ${this.food}`);
      this.food = "";
      this.restaurant.unsubscribeObserver(driver);
      this.restaurant.setFood(this.food);
      this.restaurant.notify();
    }
    else {
      alert("No hay pedido para entregar")
    }
  }

  // Subscribes again a Driver to restaurant after finishing delivery
  finishDelivery(driver: Driver): void {
    driver.setStatus("Disponible para hacer entrega");
    this.restaurant.subscribeObserver(driver);
  }

  // Notifies every Driver that there is a new food dish to be delivered
  searchDrivers(): void {
    this.restaurant.setFood(this.food);
    this.restaurant.notify();
  }
  // End of OBSERVER pattern

  // ITERATOR pattern
  // Service or client that uses iterator only interacts with it because collection is part of iterator class
  startIterator(): void {
    let collection = new NamesCollection();
    let iterator = collection.createIterator();
    while(iterator.hasMore()) {
      alert(iterator.getNext());
    }
  }
  //End of ITERATOR pattern

}
