import { Injectable, Renderer2, RendererFactory2,  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MouseCursorService {

  private renderer: Renderer2;
  private prevX: number;
  private isMoving: boolean = false;


  //definição dos tipos para o cursor
  private cursorImages: { [key in 'ufo_padrao' | 'ufo_esq' | 'ufo_dir' | 'ufo_cone']: string } = {
    ufo_padrao: "url('/png/mouse_cursor/ufo_padrao.png'), auto",
    ufo_esq: "url('/png/mouse_cursor/ufo_esq.png'), auto",
    ufo_dir: "url('/png/mouse_cursor/ufo_dir.png'), auto",
    ufo_cone: "url('/png/mouse_cursor/ufo_cone.png'), auto",
  };

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.prevX = window.innerWidth / 2; // Inicializa a posição X central
  }

  // Inicia os eventos do mouse
  initMouseEvents() {
    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    document.addEventListener('click', this.handleMouseClick.bind(this));
  }

  private handleMouseMove(event: MouseEvent) {
    const currentX = event.clientX;

    // Detecta o movimento do mouse para a esquerda ou para a direita
    if (currentX > this.prevX) {
      this.setCursor('ufo_esq'); // Mouse movendo para a direita
      } else if (currentX < this.prevX) {
        this.setCursor('ufo_dir'); // Mouse movendo para a esquerda
      }
      // Atualiza a posição anterior do mouse
      this.prevX = currentX;
    }

    // clique do mouse para abdução
    private handleMouseClick() {
      this.setCursor('ufo_cone'); // Quando clica, o cursor é alterado para ufo_cone
    }

    // Altera o cursor com base no tipo fornecido
    setCursor(cursorType: 'ufo_padrao' | 'ufo_esq' | 'ufo_dir' | 'ufo_cone') {
    // Define o cursor de acordo com o tipo
    this.renderer.setStyle(document.body, 'cursor', this.cursorImages[cursorType]);
  }

  // Reseta o cursor de volta ao padrão
  resetCursor() {
    this.setCursor('ufo_padrao'); // Quando o mouse estiver parado, o cursor volta ao padrão
  }
}
