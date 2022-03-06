import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HubComponent } from './pages/hub/hub.component';
import { SourcesComponent } from './pages/sources/sources.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: "/hub" },
  { path: 'hub', component: HubComponent },
  { path: 'sources', component: SourcesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
