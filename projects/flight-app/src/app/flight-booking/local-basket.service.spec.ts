/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalBasketService } from './local-basket.service';

describe('Service: LocalBasket', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalBasketService]
    });
  });

  it('should ...', inject([LocalBasketService], (service: LocalBasketService) => {
    expect(service).toBeTruthy();
  }));
});
