import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WelcomeComponent} from './welcome/welcome.component';
import {ElementComponent} from './element/element.component';
import {AboutComponent} from './about/about.component';

export const router: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'project/:id', component: ElementComponent, data: {animation: 'Contact'}},
  {path: 'about', component: AboutComponent, data: {animation: 'Contact'}},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
