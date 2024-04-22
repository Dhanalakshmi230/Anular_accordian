

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router'; // Import RouterModule
// import { AppComponent } from './app.component';
// import { RowListComponent } from './row-list/row-list.component';
// import { ToastrModule } from 'ngx-toastr';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AcordianComponent } from './acordian/acordian.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     RowListComponent,
//     AcordianComponent
//   ],
//   imports: [
//     // BrowserAnimationsModule, // Required for animations
//     ToastrModule.forRoot(),
//     BrowserModule,
//     MatSnackBarModule,
//     FormsModule,
//     HttpClientModule,
//     RouterModule.forRoot([ // Define your routes here
//       { path: '', component: RowListComponent }
//     ]),
//     BrowserAnimationsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router'; // Improved import

// Angular Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
// Application Components
import { AppComponent } from './app.component';
import { AcordianComponent } from './acordian/acordian.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', component: AcordianComponent } // Define routes using const
];

@NgModule({
  declarations: [
    AppComponent,
    AcordianComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatCardModule,
    MatSnackBarModule,
    MatExpansionModule,
    FormsModule,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

