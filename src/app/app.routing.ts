import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneListComponent } from './components/phone-list.component';
import { PhoneDetailComponent } from './components/phone-detail.component';

const appRoutes: Routes = [
  { path: 'phone/:id', component: PhoneDetailComponent },
  {
    path: '',
    component: PhoneListComponent,
    data: {
      title: 'List of phones'
    }
  },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);