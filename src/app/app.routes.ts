import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { UserDetailComponent } from './components/pages/user-detail/user-detail.component';
export const appRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./components/pages/user-list/user-list.component').then(m => m.UserListComponent),
      },
      {
        path: 'user/:id',
        loadComponent: () => import('./components/pages/user-detail/user-detail.component').then(m => m.UserDetailComponent),
      }
    ]
  }
];
