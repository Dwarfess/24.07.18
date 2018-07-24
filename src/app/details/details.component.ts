import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Client} from '../services/client';
import {HttpService} from '../services/http.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {
    client: Client;

    constructor(private service: HttpService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
      // checks url params for define client
        this.activatedRoute.params.forEach((params: Params) => {
            let name = params['name']; // get client id(name)

            // http get clients
            this.service.getClients()
                .subscribe(data => {
                    this.client = data.find(x => (x.general.firstName) + (x.general.lastName) === name);
                });
        });
    }
}
