import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-loadbox',
  templateUrl: './core-loadbox.component.html',
  styleUrl: './core-loadbox.component.css'
})
export class CoreLoadboxComponent implements OnInit {
  @Input() public text!: string;
  @Input() public estaCarregando!: Boolean;

  ngOnInit(): void {
    
  }

  constructor() {

  }

}
