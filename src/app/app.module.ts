import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClientsComponent} from './clients/clients.component';
import {DetailsComponent} from './details/details.component';
import {SearchComponent} from './search/search.component';

import {MaterialModule} from './material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpService} from './services/http.service';
import {BroadcastService} from './services/broadcast.service';
import {ClientsRoutingModule} from './clients/clients-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        ClientsComponent,
        DetailsComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ClientsRoutingModule,
        FormsModule
    ],
    providers: [HttpService, BroadcastService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
