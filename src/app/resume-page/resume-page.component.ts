import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css'],
})
export class ResumePageComponent {
  educations = [
    {
      id: 1,
      year: '2014 - 2016',
      school: 'Stevens Institute of Technology',
      details:
        'I studied Quantitative Finance: a mix of Computer Science, Math, and Finance.',
    },
    {
      id: 2,
      year: '2010 - 2016',
      school: 'Higher School Graduation',
      details:
        'I use animation as a third dimension by which to simplify experiences and kuiding',
    },
  ];

  experiences = [
    {
      id: 1,
      year: '2023 - Now',
      company: 'Web Designer - Envato',
      details:
        'I use animation as a third dimension by which to simplify experiences and kuiding',
    },
    {
      id: 2,
      year: '2015 - 2023',
      company: 'Developer - Zhinc Studio',
      details:
        'I use animation as a third dimension by which to simplify experiences and kuiding',
    },
  ];

  testimonies = [
    {
      name: 'Emma Watson',
      image: '/assets/placeholder.png',
      details:
        'I use animation as a third dimension by which to simplify experiences and kuiding',
    },
    {
      name: 'Claire Madisson',
      image: '/assets/placeholder2.png',
      details:
        'I use animation as a third dimension by which to simplify experiences and kuiding',
    },
  ];
}
