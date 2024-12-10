import { Component, OnInit, HostListener, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RadioComponent } from './radio/radio.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AddRadioComponent } from './add-radio/add-radio.component';
import { MouseCursorService } from './mouse-cursor.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RadioComponent, RodapeComponent, AddRadioComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'repRadioOnline';


  constructor (private mouseCursorService: MouseCursorService) {    
  }
  
  ngOnInit(): void {
    // Inicia os eventos de mouse ao carregar o componente
    this.mouseCursorService.initMouseEvents();
  }

  // Resetando o cursor para o padrão quando o mouse parar de se mover
  @HostListener('mousemove', ['$event'])
  onMouseMove() {
    
    // Remove qualquer timeout existente
    clearTimeout(this.resetTimeout);

    // Define o ponteiro para o movimento
    this.mouseCursorService.setCursor('ufo_esq');

    // Define um tempo para retornar ao padrão após 200ms sem movimento
    this.resetTimeout = setTimeout(() => {
      this.mouseCursorService.resetCursor();
    }, 200);
  }

  private resetTimeout: any;
  

}
