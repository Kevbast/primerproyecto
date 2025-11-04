import { Component,OnInit,DoCheck } from "@angular/core";
@Component({
    selector:"hooks-angular",
    standalone:false,
    templateUrl:"./hooksangular.html",
})
export class HooksAngular implements OnInit{
constructor(){
    console.log("Cnstructor: PRIMER MÉTODO DE INICIO COMPONENT");
    
    
}
ngOnInit():void{
        console.log("SOY ONINIT,DESPUÉS DEL CONSTRUCTOR!!")
    }
ngDoCheck():void{
        console.log("ng check cambiando algo del render")

}

}