import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-core-textfield',
  templateUrl: './core-textfield.component.html',
  styleUrl: './core-textfield.component.css'
})
export class CoreTextfieldComponent {
  @Input() public name!: string;
  @Input() public text!: string;
  @Input() public value!: string;
  @Input() public placeholder!: string;
  @Input() public isRequired!: Boolean;
  @Input() public isDisabled!: Boolean;
  @Input() public nomeForm!: FormGroup;
  constructor() { }

}
