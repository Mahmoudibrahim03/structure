import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  // public props
  public bannerSrc: string = '../../assets/banner.jpeg';

  constructor() { }

  ngOnInit(): void {
  }

}
