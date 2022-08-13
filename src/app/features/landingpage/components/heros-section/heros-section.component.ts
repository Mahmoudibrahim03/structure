import { Component, OnInit } from '@angular/core';
import { IActor } from 'src/app/core/interfaces/actors';
import actors from '../../../../../assets/data/actors.json';
@Component({
   selector: 'app-heros-section',
   templateUrl: './heros-section.component.html',
   styleUrls: ['./heros-section.component.scss']
})
export class HerosSectionComponent implements OnInit {
   public actors: IActor[] = actors;

   //eslint-disable-next-line @typescript-eslint/no-empty-function
   constructor() { }

   //eslint-disable-next-line @typescript-eslint/no-empty-function
   ngOnInit(): void {
   }

}
