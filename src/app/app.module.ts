import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatListModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

/**
 * Import Components & Services
 */
import { TradeComponent } from './components/trade/trade.component';
import { IntroComponent } from './components/intro/intro.component';
import { FxRatesService } from "./fx-rates.service";

const appRoutes: Routes = [
  { path: '',      component: IntroComponent },
  { path: 'exhange', component: TradeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TradeComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatCardModule
  ],
  providers: [FxRatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
