import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {HttpService} from '../services/http.service';
import {Client} from '../services/client';
import {BroadcastService} from '../services/broadcast.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {
    clients: Client[];

    constructor(private service: HttpService, private router: Router, private broadcast: BroadcastService) {}

    ngOnInit() {
        this.getClients();

        this.broadcast.subscriberToSearch()
            .subscribe(res => this.clients = res);
    }

    // http get clients
    public getClients() {
        this.service.getClients()
            .subscribe(data => this.clients = data);
    }

    //
    onSelect(client) {
        this.router.navigate(['/clients', (client.general.firstName) + (client.general.lastName)])
            .then(response => response);
    }
}
