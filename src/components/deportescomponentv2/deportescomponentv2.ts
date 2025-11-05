import { Component } from "@angular/core";

@Component({
    selector:"app-deportesv2",
    templateUrl:"./deportescomponentv2.html",
    standalone:false,
    styleUrl:"./deportescomponentv2.css"
})

export class DeportesComponentV2{
    public sports:Array<string>;
    public numbers:Array<number>;

    constructor(){
        this.sports = ["Canicas","Dardos","Petanca","Bolos"]
        this.numbers=[12,23,46,77,90]
    }
}