import {NgModule} from '@angular/core';

import {ComponentA} from './component_a/component';
import {ComponentB} from './component_b/component';


@NgModule({
  declarations: [
    ComponentA,
    ComponentB,
  ],
  exports: [
    ComponentA,
    ComponentB,
  ]
})
export class FooModule {}
