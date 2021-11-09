import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dogs: any = [
    {
      id: 1,
      title: 'Shiba Inu',
      subtitle: 'Cute dog',
      coverImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend molestie congue. Vestibulum sed arcu vel eros auctor eleifend non eget quam. Etiam consequat tristique magna in euismod. Fusce odio tortor, euismod et nisl a, posuere consectetur justo. Maecenas iaculis sed sem eu commodo.',
      date: '2018-05-08T17:58:47Z'
    },
    {
      id: 2,
      title: 'Shiba Inu',
      subtitle: 'Cute dog',
      coverImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend molestie congue. Vestibulum sed arcu vel eros auctor eleifend non eget quam. Etiam consequat tristique magna in euismod. Fusce odio tortor, euismod et nisl a, posuere consectetur justo. Maecenas iaculis sed sem eu commodo.',
      date: '2019-11-26T17:58:47Z'
    },
    {
      id: 3,
      title: 'Shiba Inu',
      subtitle: 'Cute dog',
      coverImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend molestie congue. Vestibulum sed arcu vel eros auctor eleifend non eget quam. Etiam consequat tristique magna in euismod. Fusce odio tortor, euismod et nisl a, posuere consectetur justo. Maecenas iaculis sed sem eu commodo.',
      date: '2021-01-01T17:58:47Z'
    },
    {
      id: 4,
      title: 'Shiba Inu',
      subtitle: 'Cute dog',
      coverImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend molestie congue. Vestibulum sed arcu vel eros auctor eleifend non eget quam. Etiam consequat tristique magna in euismod. Fusce odio tortor, euismod et nisl a, posuere consectetur justo. Maecenas iaculis sed sem eu commodo.',
      date: '2021-11-09T01:00:47Z'
    },
  ]
}
