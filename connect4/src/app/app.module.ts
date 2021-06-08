import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './modules/toolbar/toolbar.component';
import { MaterialModule } from './modules/material/material.modules';
import { FooterComponent } from './modules/footer/footer.component';
import { GameComponent } from './modules/game/game.component';
import { DiskComponent } from './modules/disk/disk.component';
import { GameContentComponent } from './modules/game-content/game-content.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    GameComponent,
    DiskComponent,
    GameContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
