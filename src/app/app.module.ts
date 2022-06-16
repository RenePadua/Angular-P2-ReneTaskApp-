import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RenehomeComponent } from './renehome/renehome.component';
import { RenetasksComponent } from './renetasks/renetasks.component';
import { RouterModule } from '@angular/router';
import { RenetasksService } from './renetasks.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
  {path: '', component: RenehomeComponent},
  {path: 'tasks', component: RenetasksComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, RenehomeComponent, RenetasksComponent ],
  bootstrap:    [ AppComponent ],
  providers: [RenetasksService],
})
export class AppModule { }
