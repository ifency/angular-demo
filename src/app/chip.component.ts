import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "my-chips",
  template: `
       
    <div class="chips-container" part="chips-container">
            <my-chip *ngFor="let chip of chips">{{ chip }}</my-chip>    
    </div>
     
  `,
  styles: [
    `
      .chips-container {
        background: #75dbcd;
        padding: 20px;
        border-radius: 5px;
        width: 500px;
      }
    `,
  ],
})
export class MyChipsComponent {
  @Input() chips: string[] = [];
}
