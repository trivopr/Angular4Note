import { Class, Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {

    constructor(private elementDef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.renderer.setStyle(this.elementDef.nativeElement, 'background-color', 'orange')
    }
}

