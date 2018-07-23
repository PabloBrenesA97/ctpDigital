import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { data_libros } from '../data/data.index';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';

@IonicPage()
@Component({
  selector: 'page-libro',
  templateUrl: 'libro.html',
})
export class LibroPage {
  busqueda = false;
  searchQuery: string = '';
  libros: any[];
  constructor(public navCtrl: NavController,private platform:Platform, public navParams: NavParams, private document: DocumentViewer, private file:File, private trasnfer: FileTransfer) {
    this.rellenarLibros();
  }
  
  abrirBusqueda(buscar){
    this.rellenarLibros();
    this.busqueda = !buscar;
  }
  rellenarLibros() {
    this.libros = data_libros;
  }

  obtenerLibros(ev: any) {
    // Resetea todos los items
    this.rellenarLibros();

    // estabece el valor del searchbar
    const val = ev.target.value;

    // si el valor esta vacio no lo filtra
    if (val && val.trim() != '') {
      this.libros = this.libros.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  abrirPDF( i:any ){
    let path = null;

    if(this.platform.is('ios')) {
      path = this.file.documentsDirectory; // ios 
    } else {
      path = this.file.dataDirectory; // android
    }

    const transfer = this.trasnfer.create();
    transfer.download(this.libros[i].dir, path+this.libros[i].nombre+".pdf").then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url,'application/pdf',{});
    });
    
  }

}
