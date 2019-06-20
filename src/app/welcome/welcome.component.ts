import { ElementRef, Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document, private router: Router, private elementRef: ElementRef) { }
  blockPreview: boolean;
  statusAnimation: boolean;
  click: boolean;
  ngOnInit() {
    this.statusAnimation = true;
    this.blockPreview = false;
    this.click = false;
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
  }
  mouseEnterLeave(elem) {
    /*if (statusEnterLeave) {
      this.statusAnimation = true;
    }
    console.log(elem);
    setTimeout(function() { console.log(2); }, 1000);*/
    console.log(elem);
    document.getElementById('overlay-image').style.backgroundImage = 'url(' + elem + ')';

  }
  clickMenuItem(elem) {
    this.click = true;
    document.getElementById('overlay-image').style.backgroundImage = 'url()';
    setTimeout(() => this.router.navigate(['./' + elem]), 700);
  }
}
