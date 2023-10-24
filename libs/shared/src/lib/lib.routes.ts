import {Route, RouterModule} from '@angular/router';
import {ContentLayoutComponent} from "./layout/content-layout/content-layout.component";
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component";
import {LoginComponent} from "./components/login/login.component";

export const sharedRoutes: Route[] = [
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
  {
    path: '',
    component: ContentLayoutComponent,
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
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ]
  },
];

export const SharedRoutes = RouterModule.forChild(sharedRoutes)
