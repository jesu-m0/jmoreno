import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './sharedComponents/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'portfolioJMD';
  fontClasses: string[] = ['montserrat-400', 'poppins-regular', 'rem-600', 'default'];
  currentFontIndex: number = 0;
  currentFontClass: string = this.fontClasses[this.currentFontIndex];

  toggleFont() {
    // Remover la clase anterior del body
    document.body.classList.remove(this.currentFontClass);

    // Cambiar al siguiente índice de fuente
    this.currentFontIndex = (this.currentFontIndex + 1) % this.fontClasses.length;

    // Obtener la nueva clase y aplicarla al body
    this.currentFontClass = this.fontClasses[this.currentFontIndex];
    document.body.classList.add(this.currentFontClass);
  }
}
