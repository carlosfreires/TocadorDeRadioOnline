import { Component } from '@angular/core';
import { BgAddRadioComponent } from './bg-add-radio/bg-add-radio.component';
import { RadioService } from '../radio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-radio',
  standalone: true,
  imports: [BgAddRadioComponent, CommonModule, FormsModule],
  templateUrl: './add-radio.component.html',
  styleUrls: ['./add-radio.component.scss']
  
})

export class AddRadioComponent {

  listaEstacoes: any[]; //lista de estações
  novaEstacao = {nome:'',desc:'',url:''}; //Estação temporaria para adicionar
  
  constructor(private radioService: RadioService) {
    this.listaEstacoes = this.radioService.getEstacoes();
  }

  addNovaEstacao() {
    if (this.novaEstacao.nome && this.novaEstacao.url) { //valida nome e url de novaEstacao
      this.radioService.addEstacao({...this.novaEstacao}); //se true, chama a função addEstacao
      this.novaEstacao = {nome:'',desc:'',url:''}; //Limpa os atributos do objeto
    } else {
      alert('Por favor, preencha todos os campos antes de adicionar uma estação.'); //exibe alert se falso
    }
  }

  removerEstacao(index: number) {
    this.radioService.removeEstacao(index)
  }

}
