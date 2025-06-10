import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, MatDialogModule, MatSnackBarModule),
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000, horizontalPosition: 'center', verticalPosition: 'top' } },
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
