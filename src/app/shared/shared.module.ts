import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found';

@NgModule({
    declarations: [
        PageNotFoundComponent,
    ],
    exports: [
        PageNotFoundComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
