import { NgModule } from '@angular/core';

import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        MatListModule,
        MatCardModule,
        MatIconModule
    ],
    exports: [
        MatListModule,
        MatCardModule,
        MatIconModule
    ],
})
export class MaterialModule {}
