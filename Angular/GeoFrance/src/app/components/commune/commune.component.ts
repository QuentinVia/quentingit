import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Departement } from 'src/app/models/departement.model';
import { Commune } from 'src/app/models/commune.model'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit {

  departements: Departement[] = []; // j'initialise un tableau pour stocker les infos de l'API
  departementsIsLoading: boolean = false; // Définir le chargement des informations
  departementsIsLoaded: boolean = false; // Si les départements sont chargés
  communes: Commune[] = [];
  communesIsLoading: boolean = true;
  communesIsLoaded: boolean = true;
  communesForGraph: { name: string, value: number }[] = []; // crée un tableau vide pour le graphique

 
  // Pour réaliser un GET, je dois déclarer un PRIVATE le service HtppClient dans le constructor
  constructor(private HttpClient: HttpClient, private toastr: ToastrService) { }

  // Fonction qui permet le chargement des départements
  loadDepartements(): void{
    this.departementsIsLoading = true; // Permet de gérer l'état du spinner

    // Récupération des données de l'API grâce à une requete GET
    this.HttpClient.get<Departement[]>("https://geo.api.gouv.fr/departements")
    .subscribe( // On doit souscrire aux informations de l'API
      data => {
        // this.toastr.success('Liste des départements chargés', 'Chargement OK')
        this.departements = data; // Je transfère les données de l'API dans mon tableau vide
        this.departementsIsLoaded = true; // Le bouton de chargement disparait
        this.departementsIsLoading = false; // Une fois les données chargées, le chargement passe à false
        
      }
    )
  }
  loadCommunes(codeDepartement:string): void{
    this.communesIsLoading = true; // Permet de gérer l'état du spinner
    // Récupération des données de l'API grâce à une requete GET
    this.toastr.success('Liste des régions chargés', 'Chargement OK')
    this.HttpClient.get<Commune[]>(`https://geo.api.gouv.fr/departements/${codeDepartement}/communes`)
    .subscribe( // On doit souscrire aux informations de l'API
      data => {
        this.communes = data; // Je transfère les données de l'API dans mon tableau vide
        this.communesForGraph = data // Ajouter les données dans le tableau
        .filter(commune => commune.population > 10000)
        .map(commune => {
          return{
            name: commune.nom,
            value: commune.population
          }
        });
        this.communesIsLoaded = true; // Le bouton de chargement disparait
        this.communesIsLoading = false; // Une fois les données chargées, le chargement passe à false
      }
    )
  }

  ngOnInit(): void {
  }


}
