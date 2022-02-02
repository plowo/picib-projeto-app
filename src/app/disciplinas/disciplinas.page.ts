import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ChangeDetectorRef} from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import {  Note } from '../services/data.service';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.page.html',
  styleUrls: ['./disciplinas.page.scss'],
})
export class DisciplinasPage implements OnInit {

  @Input() id: string;
  @Input() turma: string;
  notes: Note[] = [];
  note: Note = null;
  
  notes2: Note = null;

  constructor(private route: Router, private dataService: DataService,  private cd: ChangeDetectorRef, private alertCtrl: AlertController, private modalCtrl: ModalController) { 
    this.dataService.getNotes().subscribe(res => {
      this.notes = res;

    })

    

    
  }

  ngOnInit() {
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
