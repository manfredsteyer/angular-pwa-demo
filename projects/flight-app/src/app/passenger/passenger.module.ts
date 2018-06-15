import { PASSENGER_SERVICES, LhPassengerService, KlmPassengerService } from './passenger.token';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerComponent } from './passenger.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: PASSENGER_SERVICES,
      useClass: LhPassengerService,
      multi: true
    },
    {
      provide: PASSENGER_SERVICES,
      useClass: KlmPassengerService,
      multi: true
    }

  ],
  declarations: [PassengerComponent]
})
export class PassengerModule { }
