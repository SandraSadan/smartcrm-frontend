import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout').then((m) => m.AuthLayout),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login').then((m) => m.Login),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/auth/register/register').then((m) => m.Register),
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./layouts/main-layout/main-layout').then((m) => m.MainLayout),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard/dashboard').then(
            (m) => m.Dashboard,
          ),
      },
      {
        path: 'customers',
        loadComponent: () =>
          import('./features/customers/customer-list/customer-list').then(
            (m) => m.CustomerList,
          ),
      },
      {
        path: 'leads',
        loadComponent: () =>
          import('./features/leads/lead-list/lead-list').then(
            (m) => m.LeadList,
          ),
      },
      {
        path: 'tasks',
        loadComponent: () =>
          import('./features/tasks/task-list/task-list').then(
            (m) => m.TaskList,
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./features/settings/settings/settings').then(
            (m) => m.Settings,
          ),
      },
    ],
  },
];
