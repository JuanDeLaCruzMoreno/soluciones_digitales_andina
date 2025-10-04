import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  password: string;
  rol: 'admin' | 'usuario';
  activo: boolean;
  fechaCreacion: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly AUTH_KEY = 'isLoggedIn';
  private readonly USER_KEY = 'currentUser';
  private readonly USUARIOS_URL = 'assets/data/usuarios.json';
  
  private currentUserSubject = new BehaviorSubject<Usuario | null>(this.getCurrentUser());
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<Usuario[]>(this.USUARIOS_URL).pipe(
      map(usuarios => {
        const usuario = usuarios.find(
          u => u.email === email && u.password === password && u.activo
        );
        
        if (usuario) {
          localStorage.setItem(this.AUTH_KEY, 'true');
          localStorage.setItem(this.USER_KEY, JSON.stringify(usuario));
          this.currentUserSubject.next(usuario);
          return true;
        }
        return false;
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.AUTH_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.AUTH_KEY) === 'true';
  }

  getCurrentUser(): Usuario | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.rol === 'admin';
  }

  getUserName(): string {
    const user = this.getCurrentUser();
    return user?.nombre || 'Usuario';
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.USUARIOS_URL);
  }
}
