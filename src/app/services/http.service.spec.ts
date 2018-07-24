import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {HttpService} from './http.service';
import {Client} from './client';

describe('HttpService', () => {
    let service: HttpService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpService]
        });

        service = TestBed.get(HttpService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('Should retrieve from the API via GET', () => {
        const dummyPost: Client[] = [
            {
                'general': {
                    'firstName': 'Liana',
                    'lastName': 'Crooks',
                    'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg'
                },
                'job': {
                    'company': 'Ledner, Johnson and Predovic',
                    'title': 'Investor Functionality Coordinator'
                },
                'contact': {
                    'email': 'Gerry_Hackett77@gmail.com',
                    'phone': '(895) 984-0132'
                },
                'address': {
                    'street': '1520 Zemlak Cove',
                    'city': 'New Devon',
                    'zipCode': '42586-7898',
                    'country': 'Guinea-Bissau'
                }
            },
            {
                'general': {
                    'firstName': 'Deontae',
                    'lastName': 'Dare',
                    'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg'
                },
                'job': {
                    'company': 'DAmore, Dicki and Borer',
                    'title': 'International Applications Consultant'
                },
                'contact': {
                    'email': 'Kellie.Marvin38@yahoo.com',
                    'phone': '1-615-843-3426 x600'
                },
                'address': {
                    'street': '65901 Glover Terrace',
                    'city': 'Alden ton',
                    'zipCode': '57744-4248',
                    'country': 'Kenya'
                }
            }
        ];
        service.getClients().subscribe(clients => {
            expect(clients.length).toBe(2);
            expect(clients).toEqual(dummyPost);
        });

        const request = httpMock.expectOne(`${service.url}`);
        expect(request.request.method).toBe('GET');

        request.flush(dummyPost);
    });
});
