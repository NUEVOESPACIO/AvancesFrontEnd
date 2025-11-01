import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tooltipVisible = false;
  tooltipContent = '';
  tooltipX = 0;
  tooltipY = 0;

  mostrarTooltip(event: MouseEvent, tipo: string) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    // Posición inicial debajo del enlace
    let tooltipX = rect.left;
    const tooltipY = rect.bottom + window.scrollY + 10;

    // Contenido dinámico
    let content = '';

    if (tipo === 'porfolio') {
      content = `
        <div>
          <h3>Mi Porfolio</h3>
          <p>Explora mis proyectos de desarrollo web, diseño frontend y experimentos personales.</p>
          <img src="assets/porfolio-preview.jpg" alt="Porfolio" width="220">
        </div>
      `;
    }

    if (tipo === 'astronomia') {
      content = `
        <div>
          <h3>Astronomía</h3>
          <p>Imágenes del cosmos, observaciones y curiosidades sobre el universo.</p>
          <img src="assets/astronomia-preview.jpg" alt="Astronomía" width="220">
        </div>
      `;
    }

    this.tooltipContent = content;
    this.tooltipVisible = true;

    // Esperamos un tick para que Angular renderice el tooltip y así medir su ancho real
    setTimeout(() => {
      const tooltipEl = document.querySelector('.tooltip') as HTMLElement;
      if (tooltipEl) {
        const tooltipWidth = tooltipEl.offsetWidth;
        const viewportWidth = window.innerWidth;

        if (tooltipX + tooltipWidth + 10 > viewportWidth) {
          tooltipX = viewportWidth - tooltipWidth - 10; // evitar desborde a la derecha
        } else if (tooltipX < 10) {
          tooltipX = 10; // evitar desborde a la izquierda
        }

        // Asignamos las coordenadas finales
        this.tooltipX = tooltipX;
        this.tooltipY = tooltipY;
      }
    });
  }

  ocultarTooltip() {
    this.tooltipVisible = false;
  }
}