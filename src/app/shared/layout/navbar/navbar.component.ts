import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // public props
  public logoPath: string = '../../../../assets/logo.png';

  constructor() { }

  ngOnInit(): void {
  }

}
