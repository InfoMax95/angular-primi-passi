import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { TestComponent } from './test/test.component';
import { MyComponentComponent } from './mycomponent/my-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ServizioProvaService } from './services/servizio-prova.service';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { HomeComponent } from './componenti/home/home.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { NotFoundComponent } from './componenti/not-found/not-found.component';
import { NavbarComponent } from './componenti/navbar/navbar.component';
import { ShopComponent } from './componenti/shop/shop.component';
import { SubscribeComponent } from './componenti/subscribe/subscribe.component';
import { FormComponent } from './componenti/form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DynamicFormComponent } from './componenti/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    TestComponent,
    MyComponentComponent,
    HighlightDirective,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ContattoComponent,
    NotFoundComponent,
    NavbarComponent,
    ShopComponent,
    SubscribeComponent,
    FormComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  // posso inserire i servizi qua dentro providers, alternativa a istanziare provided
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
