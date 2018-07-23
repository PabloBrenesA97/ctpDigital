import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VistaGeneralPage } from './vista-general';

@NgModule({
  declarations: [
    VistaGeneralPage,
  ],
  imports: [
    IonicPageModule.forChild(VistaGeneralPage),
  ],
})
export class VistaGeneralPageModule {}
