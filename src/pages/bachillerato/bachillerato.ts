import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { bachiller_biologia,bachiller_civica,bachiller_sociales,bachiller_mate,bachiller_ingles,bachiller_espanol } from '../data/data.index';
import { VistaGeneralPage } from '../vista-general/vista-general';


@IonicPage()
@Component({
  selector: 'page-bachillerato',
  templateUrl: 'bachillerato.html',
})
export class BachilleratoPage {
  lista: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina(materia,lista){
    if(materia == "español"){
      lista = bachiller_espanol;
    }else if(materia == "biologia"){
      lista = bachiller_biologia;
    }else if(materia == "civica"){
      lista = bachiller_civica;
    }else if(materia == "sociales"){
      lista = bachiller_sociales;
    }else if(materia == "ingles"){
      lista = bachiller_ingles;
    }else if(materia == "mate"){
      lista = bachiller_mate
    }
    //console.log(lista);
    
    this.navCtrl.push(VistaGeneralPage, { lista,materia })
  }

}
