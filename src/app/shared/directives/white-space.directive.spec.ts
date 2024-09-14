import { ElementRef, Renderer2 } from '@angular/core';
import { WhiteSpaceDirective } from './white-space.directive';

describe('WhiteSpaceDirective', () => {
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    elementRef = new ElementRef(document.createElement('div'));
    renderer = jasmine.createSpyObj('Renderer2', ['setProperty']);
  });

  it('should create an instance', () => {
    const directive = new WhiteSpaceDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});
