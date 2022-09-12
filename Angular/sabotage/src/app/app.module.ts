import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SeriesComponent } from './Components/series/series.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SeriesListComponent } from './Components/series-list/series-list.component';
import { SeriesService } from './Services/series.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', pathMatch:"full", redirectTo:"home"},
  {path: 'home', component: HomeComponent},
  {path: 'series', component: SeriesComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SeriesListComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
