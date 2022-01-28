import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ChangeDetectorRef} from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import {  Note } from '../services/data.service';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  notes: Note[] = [];

  constructor(private route: Router, private dataService: DataService,  private cd: ChangeDetectorRef, private alertCtrl: AlertController, private modalCtrl: ModalController) {
    this.dataService.getNotes().subscribe(res => {
      this.notes = res;
      this.cd.detectChanges();
    });
  }

  toAlunos(){
    this.route.navigate(['alunos'])
  }

  toAvisos(){
    this.route.navigate(['avisos'])
  }

  toCalendar(){
    this.route.navigate(['calendario'])
  }

  toDisciplinas(){
    this.route.navigate(['disciplinas'])
  }
  async addNote() {
    const alert = await this.alertCtrl.create({
      cssClass: 'alertopn',
      header: 'Adicionar Nova Atividade',
      inputs: [
        {
          name: 'title',
          placeholder: 'Título',
          type: 'text'
        },
        {
          name: 'text',
          placeholder: 'Descrição',
          type: 'textarea'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'cancelbtn',
          handler: () => {
            console.log('Confirm Cancel')}
        }, {
          text: 'Salvar',
          cssClass: 'savebtn',	
          handler: res => {
            this.dataService.addNote({ text: res.text, title: res.title });
          }
        }
      ]
    });
 
    await alert.present();
  }
 
  async openNote(note: Note) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: { id: note.id },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.8
    });
 
    await modal.present();
  }



}
