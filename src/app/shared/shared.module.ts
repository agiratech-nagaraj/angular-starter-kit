import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersOnlyDirective } from '@app/shared/directives/numbers-only.directive';
import { FilterPipe } from '@app/shared/pipes/filter.pipe';
import { AppSortByPipe } from '@app/shared/pipes/sort-by.pipe';
import { AutoFocusDirective } from '@app/shared/directives/auto-focus.directive';

@NgModule({
  declarations: [
    NumbersOnlyDirective,
    FilterPipe,
    AppSortByPipe,
    AutoFocusDirective,
  ],
  imports: [CommonModule],
  exports: [
    NumbersOnlyDirective,
    FilterPipe,
    AppSortByPipe,
    AutoFocusDirective,
  ],
})
export class SharedModule {}
