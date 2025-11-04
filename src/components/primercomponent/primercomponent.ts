import { Component } from "@angular/core";
//UN COMPONENT DEBE TENER SIEMPRE LA DECLARACIÓN DE SU CONTENIDO

@Component({
    //DEBEMOS DECLARAR EL NOMBRE DEL COMPONENT MEDIANTE SU SELECTOR EN HTML
    //EN ANGULAR LOS SELECTORES LLEVAN GUIÓN 
    selector:"primer-component",
    standalone: false,
    //POR AHORA NO VOYA TENER HTML SEPARADO,PODEMOS INCLUIRLO DENTRO DEL PROPIO COMPONENT
    templateUrl:"./primercomponent.html",
    styleUrl:"./primercomponent.css",
    //para más estilos en una misma plantilla styleUrls:["./primercomponent.css",]
})
//CADA COMPONENT SIEMPRE DEBE TENER UNA CLASE ASOCIADA EN SU TS
//DICHO NOMBRE DE CLASE SI LLEVA MAYUSCULAS Y SE DECLARAN DENTRO DE app-module.ts
export class PrimerComponent{
    //AQUI ES DONDE SE DECLARAN LAS VARIABLES
    //DICHAS VARIABLES DEBEN TENER UN TIPADO SIEMPRE(Typescript)
    public titulo:string;
    public descripcion:string;
    public year:number;

    //EN ANGULAR ,AL IGUAL QUE EN REACT, TENEMOS UN CONSTRUCTOR.
    //EN DICHO CONSTRUCTOR SERÁ DONDE INICIALIZAREMOS/INSTANCIAREMOS LOS ELEMENTOS DE MI CLASE
    constructor(){
        //PARA ACCEDER A LOS OBJETOS DE LA CLASE,UTILIZAREMOS LA PALABRA THIS
        this.titulo="Hoy es martes";
        this.descripcion="kkvj";
        this.year=77;
    }

}