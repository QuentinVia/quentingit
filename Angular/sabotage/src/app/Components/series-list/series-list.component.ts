import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCoffee, faCheck, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({

  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  faCoffee = faCoffee;
  faCheck = faCheck;
  faCircleNotch = faCircleNotch;

  @Input() series: string[] = [];
  @Input() newSerieAdded: boolean = false;
  @Input() seriesIsLoading: boolean = false;
  @Input() seriesIsLoaded: boolean = false;

  @Output() addSerie:EventEmitter<string> = new EventEmitter();
  
  newSerie: string = "";

  checkForm(): boolean{
    return this.newSerie === "";
  }

  submit(): void{
    this.addSerie.emit(this.newSerie);
    this.newSerie = "";
  }

  constructor() { 

  }

  ngOnInit(): void {
    
  }

}
