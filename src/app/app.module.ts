import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressNewComponent } from './progress-new/progress-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ProgressNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
