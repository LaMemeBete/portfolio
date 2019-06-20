import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WelcomeComponent} from './welcome/welcome.component';
import {ElementComponent} from './element/element.component';
import {KwerkComponent} from './kwerk/kwerk.component';
import {SmileComponent} from './smile/smile.component';
import {JblComponent} from './jbl/jbl.component';
import {EnexusComponent} from './enexus/enexus.component';

export const router: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent, data: {animation: 'Home'}},
  {path: 'city', component: ElementComponent, data: {animation: 'Contact'}},
  {path: 'kwerk', component: KwerkComponent, data: {animation: 'Contact'}},
  {path: 'smile', component: SmileComponent},
  {path: 'jbl', component: JblComponent},
  {path: 'enexus', component: EnexusComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
