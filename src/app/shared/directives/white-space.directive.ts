import {
  Directive,
  ElementRef,
  Renderer2,
  OnChanges,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appWhiteSpace]',
})
export class WhiteSpaceDirective implements OnChanges {
  @Input() appWhiteSpace: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    const trimmedText = this.appWhiteSpace.trim();
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerText',
      trimmedText
    );
  }
}
