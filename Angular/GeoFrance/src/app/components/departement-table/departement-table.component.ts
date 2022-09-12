import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Departement } from 'src/app/models/departement.model';
import { faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-departement-table',
  templateUrl: './departement-table.component.html',
  styleUrls: ['./departement-table.component.css']
})
export class DepartementTableComponent implements OnInit {

  // Permet de gérer les entrées et sorties dans la balise HTML de commune.component.html
  @Input() departements: Departement[] = [];
  @Input() departementsIsLoading: boolean = false;
  @Input() departementsIsLoaded: boolean = false;
  @Output() loadDepartements: EventEmitter<{}> = new EventEmitter();
  @Output() loadCommunes: EventEmitter<string> = new EventEmitter();
  @Input() communesIsLoaded: boolean = false;

  currentPage: number = 1; // Pour la pagination, l'état de la page actuel qui commence à 1
  search: string = ""; // L'input de la barre de recherche qu'on met à vide
  faGlass = faMagnifyingGlassMinus;
  constructor() { 

  }

  ngOnInit(): void {
  }

  // Permet d'obtenir la longueur du tableau départements et de convertir en lowerCase les données
  // Pour faire fonctionner la barre de recherche
  getLength(): number{
    return this.departements
    .filter(departement => 
    departement.nom.toLowerCase().includes(this.search.toLowerCase()) ||
    departement.code.includes(this.search)    
    )
    .length;
  }

  getDepartements(): Departement[]{
    return this.departements
    .filter(departement =>
      departement.nom.toLowerCase().includes(this.search.toLowerCase()) ||
      departement.code.includes(this.search)
      )
    .slice((this.currentPage - 1) * 10, this.currentPage * 10);
  }

}
