import { Observable } from 'rxjs';
import { FlightEditComponent } from './../../flight-booking/flight-edit/flight-edit.component';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';

export interface ExitComponent {
    canExit(): Observable<boolean>;
}

@Injectable({
    providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<ExitComponent> {
    
    canDeactivate(component: ExitComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        return component.canExit();

    }
}