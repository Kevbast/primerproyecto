import { Component } from "@angular/core";

@Component({
    selector:"app-deportes",
    templateUrl:"./deportescomponent.html",
    standalone:false,
    styleUrl:"./deportescomponents.css"
})

export class DeportesComponent{
    public sports:Array<string>;
    public numbers:Array<number>;

    constructor(){
        this.sports = ["Canicas","Dardos","Petanca","Bolos"]
        this.numbers=[12,23,46,77,90]
    }
}