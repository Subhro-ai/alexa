import { Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  @ViewChild('blob') blobElement!: ElementRef;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;

    // Get the blob's dimensions
    const blobWidth = this.blobElement.nativeElement.offsetWidth;
    const blobHeight = this.blobElement.nativeElement.offsetHeight;

    // Adjust the position to center the blob on the cursor
    const adjustedX = x - (blobWidth / 2);
    const adjustedY = y - (blobHeight / 2);

    this.blobElement.nativeElement.style.transform = `translate(${adjustedX}px, ${adjustedY}px)`;
  }
}
