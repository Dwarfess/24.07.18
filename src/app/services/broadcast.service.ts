import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BroadcastService {
    private searchEvent = new EventEmitter();

    // set new client list after search
    searchClients(data) {
        this.searchEvent.emit(data);
    }

    // subscriber watches any changes
    subscriberToSearch() {
        return this.searchEvent;
    }
}
