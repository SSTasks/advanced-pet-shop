import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MaterialModule} from './material';
import {PetshopComponent} from './petshop/petshop.component';
import {HttpService} from './services/http.service';
import {InfoPipe} from './pipes/info.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PetshopComponent,
        InfoPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
