import { Component, HostListener } from '@angular/core';
import { RadioService } from '../radio.service';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent {

  constructor(private radioService: RadioService) {
    this.estacoes = this.radioService.getEstacoes();
  }

  indiceEstacaoAtual: number = 1; // Índice da estação atual
  private estacoes: any[]; // Lista de estações
  private audio: HTMLAudioElement | null = null; // Instância do áudio
  estacaoExibida: null | string = null; // Nome da estação exibida no display
  descExibida: null | string = null; // Nome da estação exibida no display
  nomeDoPlayer: string = 'Cosmos Radio Player'; // Nome padrão do player

  play(): void {
    if (this.audio) {  
      this.stop();
    }
    const estacaoAtual = this.estacoes[this.indiceEstacaoAtual -1];
    this.audio = new Audio(estacaoAtual.url);
    this.estacaoExibida = estacaoAtual.nome;
    this.descExibida = estacaoAtual.desc;
    this.audio.play().catch(
      (error) => console.error('Erro na reprodução da radio', error)
    );
  };

  stop(): void {
    if (this.audio) {
      this.audio.pause()
      this.audio.currentTime = 0;
      this.audio = null;
      this.estacaoExibida = null;
    }
  };

  nextStation(): void {
    if (this.audio) {
      this.stop();
      this.indiceEstacaoAtual = (this.indiceEstacaoAtual % this.estacoes.length) + 1; 
      this.play();
    }
  }

  previousStation(): void {
    this.stop();
    this.indiceEstacaoAtual = (this.indiceEstacaoAtual + this.estacoes.length - 1) % this.estacoes.length;
    this.play();
  }

  volumeAudio(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const volume = parseFloat(inputElement.value);

    // Atualiza o volume do áudio
    if (this.audio) {
      this.audio.volume = volume;
    }

    // Chama a função para atualizar o estilo do volume
    this.volumeAudioEstilo(event);
  }

  volumeAudioEstilo(event: any): void {
    const volume = event.target.value * 100; // Obtém o volume (0-100%)
    const gradient = `linear-gradient(90deg, #b11ad6 ${volume}%, #df7621 ${volume}%)`;
    event.target.style.background = gradient;
  }

 
}
