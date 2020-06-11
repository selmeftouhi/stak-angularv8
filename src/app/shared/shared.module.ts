import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateIn } from './pipes/translateIn.component';
import { SafeHtmlPipe } from './pipes/safeHTML.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*import { Ng5SliderModule } from 'ng5-slider';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';*/

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    /*Ng5SliderModule,
    TranslateModule,
    NgbModule*/
  ],
  declarations: [
    TranslateIn,
    SafeHtmlPipe
  ],
  providers: [],
  exports: [
    TranslateIn,
    SafeHtmlPipe
  ]
})
export class SharedModule { }
