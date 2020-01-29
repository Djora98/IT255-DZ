import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { VideoBoxComponent } from './components/video-box/video-box.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddVideoComponent,
    VideoBoxComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
