import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { async } from 'q';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertController: AlertController,
    public toastController: ToastController) { }

  async pokeAlert(){
    var alert = await this.alertController.create({
      message:"Eh its ok...",
      buttons: ['OK']
    });
    alert.present();
  }

  async digiToast(){
    const toast = await this.toastController.create({
      message: "Yes! They are my favorite :)",
      duration: 4000
    });
    toast.present();
  }
}
