import {Component, ElementRef, Inject, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {ElementsService} from '../services/elements.service';

declare var Parallax: any;

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
    constructor(@Inject(DOCUMENT) document, private router: Router, private elementRef: ElementRef, private route: ActivatedRoute, private elementsService: ElementsService) {
    this.route.params.subscribe (res => {
      this.projects = [];
      this.showImages = false;
      this.isLoading = true;
      this.counter = 0;
      this._fetchData();
    });
  }
  projects: any;
  project: any;
  id: number;
  isLoading: boolean;
  counter: number;
  showImages: boolean;
  ngOnInit() {
    this.isLoading = true;
    this.showImages = false;
    this.projects = [];
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
    window.scrollTo(0, 0);
    this.counter = 0;
  }
  _next(id) {
    this.router.navigateByUrl('project/' + id);
  }
  _fetchData() {
    this.id = parseInt(this.route.snapshot.params.id, 10);
    console.log(this.id);
    this.elementsService.getJSON().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.projects.push(data[i]);
      }
      this.project = this.projects[this.id - 1];
      setTimeout(() => {
        this.isLoading = false;
      }, 600);
    });
  }
  updateCounter() {
    this.counter++;
    if (this.counter === this.project.img.length) {
      this.showImages = true;
    }
  }
}
