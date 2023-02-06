import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { CocktailServiceService } from '../cocktail-service.service';
@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.css']
})
export class CocktailListComponentComponent implements OnInit{


  
// constructor (public cocktailServiceService : CocktailServiceService){}

// cocktailList : { nom : string, prix : string, image : string}[] = []

// ngOnInit(): void   {
//   this.cocktailList = this.cocktailServiceService.cocktail
//   console.log(this.cocktailList)
// }

// send(){
//   console.log(this.cocktailList)

data : any;
cocktails : any;

constructor (public cocktailServiceService : CocktailServiceService){}

ngOnInit(): void {
  this.cocktailServiceService.getCocktail().subscribe(data => {
// next:(data) => { this.cocktails = data},
//   error:() =>{console.log('erreur')},
//   complete: () => {}, ( cette méthode fonctionne )
  this.cocktails = data // 2 eme méthode plus simple on envoi la méthode getcocktail dans data ! 

})
}



show(){
  console.log(this.cocktails)
}
}
