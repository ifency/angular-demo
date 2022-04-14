import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "my-chip",
  template: `
       
    <span
      part="chip"
      class="my-chip"
      [ngClass]="{ active: active }"
      (click)="active = !active"
    >
            <ng-content></ng-content>    
    </span>
     
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
  styles: [
    `
      .my-chip {
        background: transparent;
        border: 2px solid #166088;
        color: #166088;
        border-radius: 5px;
        margin: 5px;
        cursor: pointer;

        &.active {
          background: #166088;
          color: #dbe9ee;
        }
      }
    `,
  ],
})
export class MyChipComponent {
  @Input() active = false;
}
