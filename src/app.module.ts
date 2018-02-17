
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [HelloWorldComponent, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
