import {Component, NgModule} from '@angular/core';
import {msg} from './lib/file';

@Component({
  selector: 'hello-world-app',
  templateUrl: './hello-world/hello-world.component.html',
  styleUrls: ['./hello-world/hello-world-styles.css']
})
export class HelloWorldComponent {
  name: string = msg;
}
