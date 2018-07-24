import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ClientsComponent} from './clients.component';
import {DetailsComponent} from '../details/details.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', redirectTo: '/clients', pathMatch: 'full'},
            {
                path: 'clients',
                component: ClientsComponent,
                children: [
                    {
                        path: ':name',
                        component: DetailsComponent
                    }
                ]}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ClientsRoutingModule { }
