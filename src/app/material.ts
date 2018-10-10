import {NgModule} from '@angular/core';

import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
    imports: [
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatSliderModule
    ],
    exports: [
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatSliderModule
    ],
})
export class MaterialModule {}
