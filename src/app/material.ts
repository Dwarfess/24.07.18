import { NgModule } from '@angular/core';

import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        MatListModule,
        MatCardModule,
        MatIconModule,
        MatInputModule
    ],
    exports: [
        MatListModule,
        MatCardModule,
        MatIconModule,
        MatInputModule
    ],
})
export class MaterialModule {}
