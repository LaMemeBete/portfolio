import { ElementRef, Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementsService } from '../services/elements.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  constructor(@Inject(DOCUMENT) document, private router: Router, private elementRef: ElementRef, private route: ActivatedRoute, private elementsService: ElementsService) { }
  blockPreview: boolean;
  statusAnimation: boolean;
  click: boolean;
  in: boolean;
  projects: any;
  ngOnInit() {
    this.statusAnimation = true;
    this.blockPreview = false;
    this.click = false;
    this.in = false;
    this.projects = [];
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
    this._fetchData();
  }
  _fetchData() {
    this.elementsService.getJSON().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.projects.push(data[i]);
      }
      console.log(this.projects);
    });
  }
  mouseEnterLeave(url, elem) {
    if (url === '') {
      this.in = false;
    } else {
      this.in = true;
      document.getElementById('overlay-image').style.backgroundImage = 'url(' + url + ')';
    }
  }
  clickMenuItem(elem) {
    this.click = true;
    document.getElementById('overlay-image').style.backgroundImage = 'url()';
    setTimeout(() => this.router.navigate(['./' + elem]), 1000);
  }
}
