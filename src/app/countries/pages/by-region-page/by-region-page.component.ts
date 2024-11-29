import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countrie.interface';
import { countriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{

  countries: Country[] = [];
  regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRegion?: Region;
  initialValue: string = ''

  constructor(private _countriesService: countriesService){}

  ngOnInit(): void {
    this.countries = this._countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this._countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region){
    this.selectedRegion = region;
    this._countriesService.searchRegion(region).subscribe(data =>{
      this.countries = data
    })
  }

}
