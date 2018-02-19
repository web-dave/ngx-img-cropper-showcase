import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ImageCropperModule } from "ngx-img-cropper";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ImageCropperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
