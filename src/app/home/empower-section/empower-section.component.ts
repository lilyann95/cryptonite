import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'empower-section',
  templateUrl: './empower-section.component.html',
  styleUrls: ['./empower-section.component.scss'],
})
export class EmpowerSectionComponent implements OnInit {
  ball: AnimationOptions = {
    path: 'https://assets7.lottiefiles.com/packages/lf20_ikaawl5v.json',
  };

  constructor() {}

  ngOnInit(): void {}
}
