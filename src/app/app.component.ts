import { Component } from '@angular/core';
import { Aluno } from './arquivo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //estancia 5 objetos do tipo Aluno
  wellington: Aluno = new Aluno("Wellington", 3283468, "Análise e Desenvolvimento de Sistemas", "14/08/1991");
  leandro: Aluno = new Aluno("Leandro", 9264479, "Tecnologia em Logística", "08/04/1994");
  thais: Aluno = new Aluno("Thais", 7264369, "Tecnologia em Mecatrônica Automotiva", "15/07/1992");
  fabiana: Aluno = new Aluno("Fabiana", 2935781, "Tecnologia em Processos Químicos", "20/01/1969");
  felipe: Aluno = new Aluno("Felipe", 4581326, "Tecnologia em Redes de Computadores", "17/11/1998");

  //Adiciona os 5 objetos a lista de alunos
  alunos: Aluno[] = [this.wellington, this.leandro, this.thais, this.fabiana, this.felipe];
  
}
