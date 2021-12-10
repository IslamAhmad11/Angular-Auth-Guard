import { HomeComponent } from './components/home/home.component';
import { TabAComponent } from './components/tab-a/tab-a.component';
import { TabBComponent } from './components/tab-b/tab-b.component';
import { TabCComponent } from './components/tab-c/tab-c.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'a', component: TabAComponent },
      { path: 'b', component: TabBComponent },
      { path: 'c', component: TabCComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
