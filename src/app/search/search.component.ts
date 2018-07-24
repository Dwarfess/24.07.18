import { Component, OnInit } from '@angular/core';

import {BroadcastService} from '../services/broadcast.service';
import {Client} from '../services/client';
import {HttpService} from '../services/http.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
    text: any;
    clients: Client[];

    constructor(private service: HttpService, private broadcastService: BroadcastService) {}

    ngOnInit() {
        // http get clients
        this.service.getClients()
            .subscribe(data => this.clients = data);
    }

    // looking for a similar value in all the properties of the objects
    searchClient() {
        let clientList = this.clients.filter((x) => {
            for (let key of Object.keys(x)) {
                if (x[key] instanceof Object) {
                    for (let subkey of Object.keys(x[key])) {
                        if (x[key][subkey].toLowerCase().includes(this.text.toLowerCase())) {
                            return true;
                        }
                    }
                }
            }
        });

        // sending new list of clients after search
        this.broadcastService.searchClients(clientList);
    }
}
