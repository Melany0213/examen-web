import { Component, OnInit } from '@angular/core';
import { Ayuda } from '../module/ayuda';
import { Persona } from '../module/persona';
import { AyudaService } from '../service/ayuda.service';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-registarestudiantes',
  templateUrl: './registarestudiantes.component.html',
  styleUrls: ['./registarestudiantes.component.css']
})
export class RegistarestudiantesComponent implements OnInit {
 persona!: Persona;
 personas!: Persona[];
  ayudas!: Ayuda[] ;
   constructor(private personaService: PersonaService, private ayudaService: AyudaService) { }

  ngOnInit(): void {
    this.persona= new Persona;
  }

  add(){

    var cont=0;
    var exist= false;
    
    while(this.persona.Id != null && this.persona.nombre != null && this.persona.tipo != null && exist === false && cont< this.personas.length){
      if(this.personas[cont].Id=== this.persona.Id)
       exist = true;
       cont++;
    }

    if(exist === false)
       if(this.ayudas[cont].cant>0){         
         alert('Se terminaron las capacidades'+this.persona.tipo)
      if(this.ayudas[cont].cant<0){
          this.ayudaService.Rest(this.persona.tipo)
          this.personaService.post(this.persona)
        }
   } else {
     alert('La persona ya recibió una ayuda('+ this.personas[cont-1].tipo+')')
   }

   if(this.persona.Id != null && this.persona.nombre != null && this.persona.tipo != null )
   alert('Existen campos vacios')
  
  }
}
