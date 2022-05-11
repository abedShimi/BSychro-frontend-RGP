import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgbModule, NgbTooltipModule, FormsModule],
  exports: [CommonModule, NgbModule, NgbTooltipModule, FormsModule],
})
export class SharedModule {}
