import { Directive, ElementRef, HostListener, HostBinding, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor: string;
    @HostBinding('style.color') textColor: string;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange')
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.backgroundColor = 'pink';
        this.textColor = 'blue';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.backgroundColor = 'transparent';
        this.textColor = '#444';
    }

}

