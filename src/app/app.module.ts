import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { ImageCropperModule } from "ngx-img-cropper";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, ImageCropperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
