import { Component, OnInit, ViewChild, HostListener, HostBinding, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @ViewChild('testHostListener') testHostListener: ElementRef;
  @HostBinding('style.color') textColor: string;

  constructor() { }

  ngOnInit() {
    console.log('testHostListener:', this.testHostListener);
  }

  @HostListener('mouseenter') mouseover() {
    this.testHostListener.nativeElement.style.backgroundColor = 'green';
    // this.testHostListener.nativeElement.style.color = 'white';
    this.textColor = 'red';
  }

  @HostListener('mouseleave') mouseleave() {
    this.testHostListener.nativeElement.style.backgroundColor = 'transparent';
    // this.testHostListener.nativeElement.style.color = 'black';
     this.textColor = '#333';
  }



}
