import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  email: string = '';
  password: string = '';
  isReady = false;

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    if (this.auth.login(this.email, this.password)) {
      this.router.navigate(['/admin']);
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }

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
