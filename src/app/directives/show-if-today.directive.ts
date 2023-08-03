import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appShowIfToday]'
})
export class ShowIfTodayDirective implements OnInit {
  @Input('appShowIfToday') date: string = '';
  private today = new Date();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) { }

  ngOnInit(): void {
    if (this.today.toDateString() === new Date(this.date).toDateString()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }



}
