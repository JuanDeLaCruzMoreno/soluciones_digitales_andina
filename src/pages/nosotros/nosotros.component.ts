import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements AfterViewInit {
  isReady = false;

  ngAfterViewInit(): void {
    const reveal = () => {
      this.isReady = true;
    };

    if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
      window.requestAnimationFrame(reveal);
    } else {
      setTimeout(reveal, 0);
    }
  }
}
