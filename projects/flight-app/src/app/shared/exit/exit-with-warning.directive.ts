import { Directive, Input, Output, HostBinding, HostListener, OnInit, EventEmitter } from '@angular/core';

@Directive({
  selector: '[clickWithWarning]' // <button (exitWithWarning)="delete()">
})
export class ClickWithWarningDirective implements OnInit {

  @Input() warning: string;
  @Output() clickWithWarning = new EventEmitter();

  constructor() { }

  @HostBinding('class') cssClass;
  
  ngOnInit() {
    this.cssClass += ' btn btn-danger';
  }

  @HostListener('click', ['$event'])
  handleClick(event) {
    if (confirm(this.warning)) {
      this.clickWithWarning.emit();
    }
  }

}
