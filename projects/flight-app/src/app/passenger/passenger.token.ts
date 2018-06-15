import { Observable, of } from 'rxjs';
import { InjectionToken } from "@angular/core";

export const PASSENGER_SERVICES = new InjectionToken<PassengerService>('PASSENGER_SERVICES');

export interface PassengerService {
    load(): Observable<string[]>;
}

export class LhPassengerService implements PassengerService {
    load(): Observable<string[]> {
        return of (['Hans', 'Karl', 'Detlef']);
    }
}


export class KlmPassengerService implements PassengerService {
    load(): Observable<string[]> {
        return of (['Hanson', 'Carlson', 'Detlefson']);
    }
}