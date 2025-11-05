import { Component, viewChild } from "@angular/core";
import { ViewChild,ElementRef } from "@angular/core";

@Component({
    selector:"app-sumarnumeros",
    templateUrl:"./sumarnumeroscomponent.html",
    standalone:false
})

export class SumarNumerosComponent{
    //Para evitar instanciar el objeto new ElementRef, en la declaración de la variable se utiliza la !
    @ViewChild("cajanumero1") cajaNumeroRef!: ElementRef;
    @ViewChild("cajanumero2") cajaNumero2Ref!: ElementRef;

    public suma:number
    
    constructor(){
        this.suma=0;
        // //EN ANGULAR QUE SEAN REFERENCIAS,TODAS LAS VARIABLES DEBEN SER INSTANCIADAS
        // this.cajaNumeroRef=new ElementRef(0);
        // this.cajaNumero2Ref= new ElementRef(0);
    }

    //métodos

    sumarNumeros():void{
        let num1=this.cajaNumeroRef.nativeElement.value;
        let num2=this.cajaNumero2Ref.nativeElement.value;
        this.suma=parseInt(num1)+parseInt(num2);
    }
}