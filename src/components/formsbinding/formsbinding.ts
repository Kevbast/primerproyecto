import { Component } from "@angular/core";
@Component({
    selector:"app-forms-binding",
    templateUrl:"./formsbinding.html",
    standalone:false,
    styleUrl:"./formsbinding.css"
})

export class FormsBinding{
    public user:any;
    public mensaje:string

    constructor(){
        this.mensaje=""
        this.user={
            nombre:"",
            apellidos:"",
            edad:0
        }
    }

    //Métodos

    recibidDatos():void{
        this.mensaje="DATOS RECIBIDOS"
    }


}