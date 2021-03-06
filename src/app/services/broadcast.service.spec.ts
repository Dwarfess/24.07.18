import {TestBed, inject} from '@angular/core/testing';

import {BroadcastService} from './broadcast.service';
import {EventEmitter} from '@angular/core';

describe('BroadcastService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BroadcastService]
        });
    });

    it('Broadcast service should be created', inject([BroadcastService], (service: BroadcastService) => {
        expect(service).toBeTruthy();
    }));

    it('Broadcast check subscriberToSearch', inject([BroadcastService], (service: BroadcastService) => {
        expect(service.subscriberToSearch()).toEqual(new EventEmitter());
    }));
});
