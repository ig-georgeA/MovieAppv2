import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { IgxButtonModule, IgxRippleModule, IgxTabsModule, IgxCardModule, IgxIconModule, IgxSelectModule, IgxInputGroupModule, IgxDatePickerModule, IgxListModule, IgxAvatarModule, IgxNavigationDrawerModule, IgxToggleModule, IgxDropDownModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MovieComplexComponent } from './movie-complex/movie-complex.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComplexComponent,
    MyPurchasesComponent,
    ChildViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxTabsModule,
    IgxCardModule,
    IgxIconModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxDatePickerModule,
    IgxListModule,
    IgxAvatarModule,
    FormsModule,
    IgxNavigationDrawerModule,
    IgxToggleModule,
    IgxDropDownModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
