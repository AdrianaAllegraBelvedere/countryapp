import { Component, OnInit } from '@angular/core';
import { countriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countrie.interface';

@Component({
  selector: 'by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(
    private _countriesService: countriesService,
  ){}


  ngOnInit(): void {
    this. countries = this._countriesService.cacheStore.byCapital.countries
    this. initialValue = this._countriesService.cacheStore.byCapital.term
  }

  searchByCapital(term:string){
    this.isLoading = true;

    this._countriesService.searchCapital(term)
    .subscribe(countries =>{
      this.countries = countries;
      this.isLoading = false;
    })
  }

}
