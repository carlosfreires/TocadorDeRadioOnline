import { Injectable } from '@angular/core';


// Definição da interface Station
interface Estacao {
  nome: string;
  desc?: string;  // 'desc' agora é opcional
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  private estacoes: Estacao [] = [
    { nome: 'Radio Cidade', desc: 'A Radio Rock', url: 'https://26643.live.streamtheworld.com/RADIOCIDADEAAC.aac' },
    { nome: 'ZonaRap', desc: 'Radio Hip Hop Ao Vivo', url: 'http://a9.asurahosting.com/listen/zonarap.es/radio.mp3' },
    { nome: 'LATINBrasil', desc: 'A rádio mais latina do Brasil', url: 'https://stm01.streammaximum.com:8869//' },
  ]

  //pegar estações
  getEstacoes(){
    return this.estacoes;
  }

  //adiciona nova estação
  addEstacao(estacao:Estacao) {
    this.estacoes.push(estacao);
  }

  //remove estação especifica
  removeEstacao(index: number) {
    this.estacoes.splice(index, 1);
  }


  constructor() { }
}
