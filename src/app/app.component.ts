import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { trigger, transition, animate, style, stagger, query } from '@angular/animations';



// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatListModule,
      MatDividerModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms 0ms', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideIn', [
      transition('void => *', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('600ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('staggeredList', [
      transition('void => *', [
        query('mat-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', animate('600ms 300ms', style({ opacity: 1, transform: 'translateY(0)' })))
        ])
      ])
    ])
  ]
})
export class AppComponent {
  name = 'Neha Bhat';
  title = 'Full Stack Developer';
  contactDetails = {
    email: 'nehabhat345@gmail.com',
    phone: '+6582877436',
    linkedin: 'https://www.linkedin.com/in/neha-bhat-855441105/',
    github: 'https://github.com/nehabhat345'
  };

  skills = ['Angular', 'React', 'Java', 'SQL', 'JavaScript', 'HTML', 'CSS'];
  experience = [
    {
      position: 'Senior Software Engineer',
      company: 'Credit Agricole Corporate & Investment Bank',
      duration: 'May 2022 - Present',
      description: 'Developing Trade Finance applications using Java, Angular and Spring Boot.'
    },
    {
      position: 'Senior Engineer',
      company: 'L&T Technology Services',
      duration: 'Feb 2021 - May 2022',
      description: 'Worked on building responsive Media web applications using React'
    },    
    {
      position: 'Software Engineer',
      company: 'Newgen Software Technologies',
      duration: 'April 2019 - Jan 2021',
      description: 'Developed Trade Finance applications using Java, Angular and Javascript.'
    },
    {
      position: 'Software Developer',
      company: 'Silverskills Private Limited',
      duration: 'May 2017 - April 2019',
      description: 'Developed applications using Java and React.'
    },
  ];
}


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'angular-portfolio';
// }
