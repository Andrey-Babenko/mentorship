import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appShowIfNdaysLeft]',
})
export class ShowIfNdaysLeftDirective implements OnInit {
  @Input('appShowIfNdaysLeft') date: string = '';
  @Input('appShowIfNdaysLeftN') diff: number = 0;
  private todayTime = new Date().setHours(0,0,0,0);

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    const differenceInDays = Math.floor(
      (new Date(this.date).getTime() - this.todayTime) /
        (1000 * 60 * 60 * 24)
    );

    if (differenceInDays >= 0 && differenceInDays <= this.diff) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
