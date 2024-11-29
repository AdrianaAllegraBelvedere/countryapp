import { Component, OnInit } from '@angular/core';
import { countriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countrie.interface';

@Component({
  selector: 'by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {

  countries:Country[] = [];
  initialValue:string = ''

  constructor(private _countriesService: countriesService,){}

  ngOnInit(): void {
      this.countries = this._countriesService.cacheStore.byCountries.countries;
      this.initialValue = this._countriesService.cacheStore.byCountries.term;
  }


  searchByCountries(term:string){
    this._countriesService.searchCountry(term).subscribe(data =>{
      this.countries = data
    })
  }

}
