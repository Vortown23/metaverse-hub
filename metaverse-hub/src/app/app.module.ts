import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SourcesComponent } from './pages/sources/sources.component';
import { HubComponent } from './pages/hub/hub.component';
import { CardListComponent } from './common/card-list/card-list.component';
import { CardComponent } from './common/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    SourcesComponent,
    HubComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
