import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertCtrl: AlertController) { }

  onSubmit(f: NgForm) {
    console.log(f.valid);
    // if (f.value.email === 'andre@andre.com' && f.value.password === 'andreandre') {
    //   this.presentAlertWelcome();
    // } else {
    //   this.presentAlertFailed();
    // }
  }

  async presentAlertWelcome() {
    const alert = await this.alertCtrl.create({
      header: 'Welcome!',
      buttons: [
        {
          text: 'OK',
        },
      ]
    });
    await alert.present();
  }
  async presentAlertFailed() {
    const alert = await this.alertCtrl.create({
      header: 'Login Failed!',
      buttons: [
        {
          text: 'OK',
        },
      ]
    });
    await alert.present();
  }

  async showAlertWithInputs() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'NAME',
      message: 'Enter your name:',
      inputs: [
        {
          name: 'studentName',
          placeholder: 'Enter your name ...',
          type: 'text',
        },
        {
          name: 'studentNumber',
          placeholder: 'Enter your NIM ...',
          type: 'text',
        }
      ],
      buttons: [
        {
          text: 'OK',
          handler: (isinya) => {
            console.log(isinya.studentNumber);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }
}
