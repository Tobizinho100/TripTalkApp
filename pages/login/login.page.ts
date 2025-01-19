import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'; // Importa o serviço de autenticação

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  authMode: string = 'login';

  constructor(private router: Router, private authService: AuthService) {} // Injeta o serviço

  onLogin() {
    this.clearErrorMessage();

    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor, preencha todos os campos!';
      return;
    }

    // Requisição ao backend para autenticação
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login bem-sucedido!', response);
        // Armazenar o token no localStorage ou sessionStorage
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Erro no login:', error);
        this.errorMessage = error.error.message || 'Erro no login. Tente novamente.';
      }
    );
  }

  onSignUp() {
    this.clearErrorMessage();

    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor, preencha todos os campos!';
      return;
    }

    this.authService.register(this.email, this.password).subscribe(
      (response) => {
        console.log('Registro bem-sucedido!', response);
        this.errorMessage = 'Registro bem-sucedido! Faça login.';
      },
      (error) => {
        console.error('Erro no registro:', error);
        this.errorMessage = error.error.message || 'Erro no registro. Tente novamente.';
      }
    );
  }

  private clearErrorMessage() {
    this.errorMessage = '';
  }
}
