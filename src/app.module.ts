
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FooModule} from './foo_module/module';
import {HelloWorldModule} from './hello-world/hello-world.module';

@NgModule({
  imports: [BrowserModule, FooModule, HelloWorldModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
