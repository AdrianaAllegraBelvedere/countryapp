import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { countriesService } from '../../services/countries.service';
import { Router } from '@angular/router';
import { Country } from '../../interfaces/countrie.interface';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  public country?: Country;

  constructor(
     private activatedRoute: ActivatedRoute,
     private _countriesService: countriesService,
     private router: Router,
  ){}

  ngOnInit(): void {
    /* this.activatedRoute.params.subscribe((params) =>{
      console.log('params', {params: params['id']})
    }) sin desestructurar*/


    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this._countriesService.searchCountryByAlphaCode(id))
    )
    .subscribe(country =>{ //desestructurado
     /*  this._countriesService.searchCountryByAlphaCode(id)
      .subscribe( country => {
        console.log(country)
      })*/

      if(!country){
        return this.router.navigateByUrl('');
      }
      console.log('Tenemos un país');
      return this.country = country;
    })


  }

  searchCountry( code:string){
    this._countriesService.searchCountryByAlphaCode(code).subscribe(country =>{
      console.log({country})
    })
  }

}
