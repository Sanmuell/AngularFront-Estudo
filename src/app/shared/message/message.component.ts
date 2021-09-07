import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `

 <div  *ngIf="temErro()" 
        class="p-message  p-message-error">
            {{ text }}
        </div>
   
  `,
  styles: [


  ]
})
export class MessageComponent  {


@Input() error: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() text: string = '';

temErro(): boolean {
    return this.control ? this.control.hasError(this.error) && this.control.dirty : true;
  }


}
