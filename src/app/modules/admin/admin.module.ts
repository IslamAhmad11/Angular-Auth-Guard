import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { TabAComponent } from './components/tab-a/tab-a.component';
import { TabBComponent } from './components/tab-b/tab-b.component';
import { TabCComponent } from './components/tab-c/tab-c.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    TabAComponent,
    TabBComponent,
    TabCComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
