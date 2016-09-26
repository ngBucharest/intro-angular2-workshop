import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneListViewComponent } from './components/phoneListView/phoneListView.component';
import { PhoneDetailsComponent } from './components/phoneDetails/phoneDetails.component';

const appRoutes: Routes = [
  { path: 'phone/:id', component: PhoneDetailsComponent },
  {
    path: '',
    component: PhoneListViewComponent,
    data: {
      title: 'List of phones'
    }
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
