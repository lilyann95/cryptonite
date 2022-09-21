import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'about-us-section',
  templateUrl: './about-us-section.component.html',
})
export class AboutUsSectionComponent implements OnInit {
  ball: AnimationOptions = {
    path: 'https://assets3.lottiefiles.com/private_files/lf30_hknognhr.json',
  };

  constructor() {}

  ngOnInit(): void {}
}
