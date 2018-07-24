import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {Client} from '../services/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {

    clients: Client[];

    constructor(private service: HttpService) {}

    ngOnInit() {
        this.getClients();
    }

    // http get clients
    public getClients() {
        this.service.getClients()
            .subscribe(data => {
                this.clients = data;
            });
    }

}
