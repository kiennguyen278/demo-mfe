import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'category',
    loadChildren: () =>
      import('category/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'use-manager',
    loadChildren: () =>
      import('use-manager/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
