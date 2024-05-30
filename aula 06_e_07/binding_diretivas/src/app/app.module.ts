import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';

@NgModule({
    imports: [
        BrowserModule,
        UserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HighlightDirective
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }

