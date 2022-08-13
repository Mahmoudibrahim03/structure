import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   // public props
   public logoPath = '../../../../assets/logo.png';

   //eslint-disable-next-line @typescript-eslint/no-empty-function
   constructor() { }

   //eslint-disable-next-line @typescript-eslint/no-empty-function
   ngOnInit(): void {
   }

}
