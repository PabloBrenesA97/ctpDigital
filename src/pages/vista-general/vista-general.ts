import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';


@IonicPage()
@Component({
  selector: 'page-vista-general',
  templateUrl: 'vista-general.html',
})
export class VistaGeneralPage {
  materias_pdf:any[];
  titulo:string;
  constructor(public navCtrl: NavController,private platform:Platform, public navParams: NavParams, private document: DocumentViewer, private file:File, private trasnfer: FileTransfer) {
    this.materias_pdf = this.navParams.get("lista");
    this.titulo = this.navParams.get("materia")
    
  }

  abrirPDF( i:any ){
    let path = null;

    if(this.platform.is('ios')) {
      path = this.file.documentsDirectory; // ios 
    } else {
      path = this.file.dataDirectory; // android
    }

    const transfer = this.trasnfer.create();
    transfer.download(this.materias_pdf[i].dir, path+this.materias_pdf[i].nombre+".pdf").then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url,'application/pdf',{});
    });
    
  }
}
