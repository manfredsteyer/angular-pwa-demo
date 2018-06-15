import { PassengerService, PASSENGER_SERVICES, LhPassengerService } from './passenger.token';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  constructor(@Inject(PASSENGER_SERVICES) 
      private passengerServices: PassengerService[]) { 

    for (let svc of passengerServices) {

      if (svc instanceof LhPassengerService) {
        console.debug('LH');
      }

      svc.load().subscribe(x => console.debug('loaded', x));
    }

  }

  ngOnInit() {
  }

}
