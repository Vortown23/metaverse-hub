import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HubComponent } from './hub/hub.component';
import { SourcesComponent } from './sources/sources.component';

const routes: Routes = [
  { path: 'hub', component: HubComponent },
  { path: 'sources', component: SourcesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
