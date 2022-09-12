import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commune-graph',
  templateUrl: './commune-graph.component.html',
  styleUrls: ['./commune-graph.component.css']
})
export class CommuneGraphComponent implements OnInit {

  @Input() communesForGraph: { name: string, value: number}[] = [];  
  @Input() communesIsLoaded: boolean = false;
  @Input() communesIsLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
