import { Component, OnInit } from '@angular/core';
import { IActor } from 'src/app/core/interfaces/actors';



@Component({
  selector: 'app-heros-section',
  templateUrl: './heros-section.component.html',
  styleUrls: ['./heros-section.component.scss']
})
export class HerosSectionComponent implements OnInit {
  public actors: IActor[] = [
    {
      name: 'John Doe',
      photo: 'assets/actors/actor1.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi eu consectetur consectetur, nisi nisi consectetur nisi, euismod nisi nisi nisi euismod nisi. Nam euismod, nisi eu consectetur consectetur, nisi nisi consectetur nisi, euismod nisi nisi nisi euismod nisi.',
      socialMedia: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://www.twitter.com/',
        instagram: 'https://www.instagram.com/',
      },
      moreLink: 'https://www.google.com/',
    },
    {
      name: 'Alex Doe',
      photo: 'assets/actors/actor2.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi eu consectetur consectetur, nisi nisi consectetur nisi, euismod nisi nisi nisi euismod nisi. Nam euismod, nisi eu consectetur consectetur, nisi nisi consectetur nisi, euismod nisi nisi nisi euismod nisi.',
      socialMedia: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://www.twitter.com/',
        instagram: 'https://www.instagram.com/',
      },
      moreLink: 'https://www.google.com/',
    },
    {
      name: 'Alex Doe',
      photo: 'assets/actors/actor3.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi eu consectetur consectetur, nisi nisi consectetur nisi, euismod nisi nisi nisi euismod nisi. Nam euismod, nisi eu consectetur consectetur, nisi nisi consectetur nisi, euismod nisi nisi nisi euismod nisi.',
      socialMedia: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://www.twitter.com/',
        instagram: 'https://www.instagram.com/',
      },
      moreLink: 'https://www.google.com/',
    },
    {
      name: 'Alex Doe',
      photo: 'assets/actors/actor4.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi eu consectetur consectetur, nisi nisi consectetur nisi, euismod nisi nisi nisi euismod nisi. Nam euismod, nisi eu consectetur consectetur, nisi nisi consectetur nisi, euismod nisi nisi nisi euismod nisi.',
      socialMedia: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://www.twitter.com/',
        instagram: 'https://www.instagram.com/',
      },
      moreLink: 'https://www.google.com/',
    },
    {
      name: 'Alex Doe',
      photo: 'assets/actors/actor5.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi eu consectetur consectetur, nisi nisi consectetur nisi, euismod nisi nisi nisi euismod nisi. Nam euismod, nisi eu consectetur consectetur, nisi nisi consectetur nisi, euismod nisi nisi nisi euismod nisi.',
      socialMedia: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://www.twitter.com/',
        instagram: 'https://www.instagram.com/',
      },
      moreLink: 'https://www.google.com/',
    },
    {
      name: 'Alex Doe',
      photo: 'assets/actors/actor6.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi eu consectetur consectetur, nisi nisi consectetur nisi, euismod nisi nisi nisi euismod nisi. Nam euismod, nisi eu consectetur consectetur, nisi nisi consectetur nisi, euismod nisi nisi nisi euismod nisi.',
      socialMedia: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://www.twitter.com/',
        instagram: 'https://www.instagram.com/',
      },
      moreLink: 'https://www.google.com/',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
