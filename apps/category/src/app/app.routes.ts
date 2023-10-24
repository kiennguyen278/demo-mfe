import {Route, RouterModule} from '@angular/router';

export const appCategoryRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
  },
];

export const AppCategoryRoutes = RouterModule.forRoot(appCategoryRoutes)
