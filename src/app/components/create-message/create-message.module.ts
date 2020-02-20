import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMessageComponent } from './create-message.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CreateMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
    exports: [
        CreateMessageComponent
    ]
})
export class CreateMessageModule { }
