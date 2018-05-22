import { AutenticacionService } from './../../servicios/autenticacion.service';

import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import firebase from 'firebase';

/**
 * Generated class for the IniciarsesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-iniciarsesion',
  templateUrl: 'iniciarsesion.html',
})
export class IniciarsesionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

    iniciarSesion(formulario: NgForm){
      firebase.auth().signInWithEmailAndPassword(formulario.value.correo,formulario.value.clave)
      .then(info => console.log('Usuario conectado'))
      .catch(error => {
        let alerta = this.alertCtrl.create({
          title: 'Ocurrió un Error',
          message: 'Ocurrió un error iniciando la sesión. ' + error,
          buttons: ['OK']
        })

        alerta.present();
      })
    }

     registrarUsuario(formulario: NgForm){
       firebase.auth().createUserWithEmailAndPassword(formulario.value.correo,formulario.value.clave)
       .then(info => console.log(info))
       .catch(error => {
         let alerta = this.alertCtrl.create({
           title: 'Ocurrió un Error',
           message: 'Ocurrió un error registrando al usuario. ' + error,
           buttons: ['OK']
         })

         alerta.present();
       })
    }
}
