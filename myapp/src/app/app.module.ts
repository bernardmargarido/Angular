import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MyFirstComponent } from './myfirst.component';
import { MySecondComponent } from './my-second/my-second.component';
import { MyThirdComponent } from './my-second/my-third/my-third.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecondComponent,
    MyThirdComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
