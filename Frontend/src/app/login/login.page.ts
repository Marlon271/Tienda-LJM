import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  onLogin() {
    // Simular autenticación (puedes conectar esto a una API)
    if (this.email === 'admin' && this.password === '123456') {
      this.navCtrl.navigateForward('/menu'); // Redirige al menú principal
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}