import {NgModule} from '@angular/core';

import {ComponentA} from './component_a/component';


@NgModule({
  declarations: [
    ComponentA,
  ],
  exports: [
    ComponentA,
  ]
})
export class FooModule {}
