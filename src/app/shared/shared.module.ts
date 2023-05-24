import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchBarComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
