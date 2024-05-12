import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsListPageRoutingModule } from './notifications-list-routing.module';

import { NotificationsListPage } from './notifications-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsListPageRoutingModule
  ],
  declarations: [NotificationsListPage]
})
export class NotificationsListPageModule {}
