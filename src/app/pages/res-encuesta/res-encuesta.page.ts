import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-res-encuesta',
  templateUrl: './res-encuesta.page.html',
  styleUrls: ['./res-encuesta.page.scss'],
})
export class ResEncuestaPage implements OnInit {

  constructor( private menuCtrl: MenuController ) { }

  ngOnInit() {
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
