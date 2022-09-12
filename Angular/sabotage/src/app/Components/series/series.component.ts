import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-series', // Balise HTML
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {


  title = 'Ma première app Angular';
  series: string[] = [];
  seriesIsLoading: boolean = false;
  seriesIsLoaded: boolean = false;

  addSerie(newSerie: string): void{
    this.series.push(newSerie);

  }

  constructor(private httpClient: HttpClient) { 
    console.log("Component series bien foncionnel!");

}

  ngOnInit(): void {    
    this.seriesIsLoading = true;
    this.httpClient.get<string[]>('assets/series.json').pipe(delay(1000)).subscribe(data=>{
      this.series = data;
      this.seriesIsLoading = false;
      this.seriesIsLoaded = true;      
    })
  }

}
