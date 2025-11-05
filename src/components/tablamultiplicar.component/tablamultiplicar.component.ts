import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  standalone: false,
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css',
})
export class TablamultiplicarComponent {
  @ViewChild("cajanumero1") cajaNumeroRef!: ElementRef;
  public numeros:Array<number>

  constructor(){
    this.numeros=[]
  }

  generarTabla():void{
    this.numeros=[];
    let num1=this.cajaNumeroRef.nativeElement.value;
    for (let i = 0; i <=10; i++) {
      let result= num1*i
      this.numeros.push(result)
    }

  }

}
