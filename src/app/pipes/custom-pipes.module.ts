import { NgModule } from '@angular/core';
import { CustomDatePipe } from './custom-date.pipe';
import { LongTextElipPipe } from './long-text-elip.pipe';

@NgModule({
  declarations: [
    CustomDatePipe,
    LongTextElipPipe
  ],
  exports: [
      CustomDatePipe,
      LongTextElipPipe
  ]
})
export class CustomPipesModule { }
