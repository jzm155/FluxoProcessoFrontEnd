import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-core-datefield',
  templateUrl: './core-datefield.component.html',
  styleUrl: './core-datefield.component.css'
})
export class CoreDatefieldComponent implements OnInit {

  ngOnInit(): void {
      
  }

  @Input() public name!: string;
  @Input() public text!: string;
  @Input() public placeholder!: string;
  @Input() public isRequired!: Boolean;
  @Input() public isDisabled!: Boolean;
  @Input() public dateForm!: FormGroup;
}
