import { AfterRenderPhase, Component, Input, OnInit, afterNextRender } from '@angular/core';
import { Combo } from '../../models/Combo';
import { CoreComboboxService } from './core-combobox.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-core-combobox',
  templateUrl: './core-combobox.component.html',
  styleUrl: './core-combobox.component.css'
})
export class CoreComboboxComponent implements OnInit {

  public store!: Combo[];
  @Input() public name!: string;
  @Input() public text!: string;
  @Input() public placeholder!: string;
  @Input() public isRequired!: Boolean;
  @Input() public isDisabled!: Boolean;
  @Input() public controllerName!: string;
  @Input() public baseMethod!: string;
  @Input() public comboForm!: FormGroup;
  @Input() public query!: string;
  public id: number | undefined;
  @Input() public value!: string;

  constructor(private coreComboService: CoreComboboxService) {

  }

  ngOnInit(): void {
    this.id = Number(this.value)
    this.LoadStore();
  }

  LoadStore() {
    this.coreComboService.LoadStore(this.controllerName, this.baseMethod).subscribe(
      (store: Combo[]) => {
        if (this.id != 0)
          this.store = store.filter(x => x.id == Number(this.value));
        else {
          this.store = store;
        }
      },
      (erro: any) => {
        console.log(erro)
      }
    );
  }

}
