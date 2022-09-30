import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  
  public LISTAESTUDIANTES: Array<Estudiante> = [
    {
      nombre :'sAntiago',
      apellido :'gomez',
      id_estudiante : 1,
      areaCursos: 'Programacion',
      cursos : ['Angular', 'React', 'SQL'],
      ultimoIngreso : new Date(),
    },
    {
      nombre :'Julia',
      apellido :'Pereira',
      id_estudiante : 2,
      areaCursos: 'Marketing',
      cursos : ['Growth Marketing', 'Inbound Marketing'],
      ultimoIngreso : new Date(),
    },
    {
      nombre :'Maria',
      apellido :'perez',
      id_estudiante : 3,
      areaCursos: 'Programacion',
      cursos : ['Angular', 'HTML'],
      ultimoIngreso : new Date(),
    },
    {
      nombre :'Diego',
      apellido :'Rodriguez',
      id_estudiante : 4,
      areaCursos: 'Diseño',
      cursos : ['UX Writing', 'Diseño UX/UI'],
      ultimoIngreso : new Date(),
    },
    {
      nombre :'jorge',
      apellido :'alvarez',
      id_estudiante : 5,
      areaCursos: 'Marketing',
      cursos : ['Copywriting', 'Branding'],
      ultimoIngreso : new Date(),
    },
    {
      nombre :'Lucia',
      apellido :'Gonzalez',
      id_estudiante : 6,
      areaCursos: 'Programacion',
      cursos : ['C#', 'SQL', 'Vue Js'],
      ultimoIngreso : new Date(),
    }
    
];

  constructor() { }

  ngOnInit(): void {
  }

}
