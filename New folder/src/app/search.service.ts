import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  public Hotels =[
    {"name":  "Hotel Taz"},
    {"name":  "Hotel Hertej"},
    {"name":  "Hotel Samode"},
    {"name":  "Hotel Oberoi"},
    {"name":  "The Imperial Hotel"},
    {"name":  "Coconut Resort"},
    {"name":  "Palais de Mahe"},
    {"name":  "Naini Retreat"},
    

  ]
  getHotels(){
    return this.Hotels;
  }
}
