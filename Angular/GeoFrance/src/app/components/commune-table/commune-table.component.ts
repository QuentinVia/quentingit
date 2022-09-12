import { Component, OnInit,  Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Commune } from 'src/app/models/commune.model';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-commune-table',
  templateUrl: './commune-table.component.html',
  styleUrls: ['./commune-table.component.css']
})
export class CommuneTableComponent implements OnInit {

  search: string = "";
  currentPage: number = 1;
  @Input() communes: Commune[] = [];
  @Input() communesIsLoading: boolean = false;
  @Input() communesIsLoaded: boolean = false;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  constructor( private toastr: ToastrService) { 
    this.toastr.success('Liste des départements chargés', 'Chargement OK')
  }

  ngOnInit(): void {
  }

  getLength(): number{
    return this.communes
    .filter(commune => 
    commune.nom.toLowerCase().includes(this.search.toLowerCase()) ||
    commune.codesPostaux.includes(this.search),    
    )
    .length
    
  }
  
  getCommunes(): Commune[]{
    return this.communes
    .filter(commune =>
      commune.nom.toLowerCase().includes(this.search.toLowerCase()) ||
      commune.code.includes(this.search),
      )
    .slice((this.currentPage - 1) * 10, this.currentPage * 10);
  }

  croissant(): Commune[]{
    return this.communes
    .sort ((a, b) => { 
    return a.population - b.population
  })
  .slice((this.currentPage - 1) * 10, this.currentPage * 10)
  }  
  decroissant(): Commune[]{
    return this.communes
    .sort ((a, b) => { 
    return a.population - b.population
  }).reverse()
  .slice((this.currentPage - 1) * 10, this.currentPage * 10)
  
  }
  
}