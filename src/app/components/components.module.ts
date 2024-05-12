import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsPageRoutingModule } from './components-routing.module';

import { ComponentsPage } from './components.page';
import { MainScreenComponent } from './main-screen/main-screen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsPageRoutingModule,

  ],
  declarations: [ComponentsPage,MainScreenComponent],
  exports:[MainScreenComponent]
})
export class ComponentsPageModule {}
