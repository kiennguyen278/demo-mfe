import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import {AuthLayoutComponent} from "../../../../libs/shared/src/lib/layout/auth-layout/auth-layout.component";
import {LoginComponent} from "../../../../libs/shared/src/lib/components/login/login.component";

export const appRoutes: Route[] = [

  {
    path: '',
    children: [

      {
        path: 'news-manager',
        loadChildren: () =>
          import('news-manager/Module').then((m) => m.RemoteEntryModule),
      },
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
    ]
  },
  // {
  //   path: 'auth',
  //   component: NxWelcomeComponent,
  // },
];
