import {Component, NgModule, Input} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'collapsible-panel',
  template: `
  <div class="container">
    <div class="panel panel-primary">
      <div class="panel-heading"><span class="glyphicon glyphicon-arrow-down" *ngIf="!visible" aria-hidden="true" (click)="visible = !visible"></span><span class="glyphicon glyphicon-arrow-up" *ngIf="visible" aria-hidden="true" (click)="visible = !visible"></span> {{title}}</div>
      
      <div class="panel-body" *ngIf="visible">
        
          <ng-content></ng-content>
        
      </div>
    </div>
 </div>
  `
})
export class Collapse {
  @Input() visible: false;
  @Input() title: string;
}