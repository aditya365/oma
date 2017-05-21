import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
 import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    PageHeaderModule
  ],
  declarations: [
    CoursesComponent
    ]
})
export class CoursesModule { }
