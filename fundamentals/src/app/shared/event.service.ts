import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
  getEvents() {
    // tslint:disable-next-line: no-use-before-declare
    return events;
  }
}
const events = [
  {
  id: 1,
  name: 'Angular Kaduna',
  time: '10:00 am',
  date: '9/26/2036',
  price: 599.99,
  imageUrl: '/assets/images/angularconnect-shield.png',
  location: {
    address: '1057 DT',
    city: 'Kaduna',
    country: 'Nigeria'
  }
},
{
  id: 1,
  name: 'Angular Kano',
  time: '10:00 am',
  date: '9/26/2036',
  price: 599.99,
  imageUrl: '/assets/images/angularconnect-shield.png',
  location: {
    address: '1057 DT',
    city: 'Kano',
    country: 'Nigeria'
  }
},
{
  id: 1,
  name: 'Angular Lagos',
  time: '10:00 am',
  date: '9/26/2036',
  price: 599.99,
  imageUrl: '/assets/images/angularconnect-shield.png',
  location: {
    address: '1057 DT',
    city: 'Lagos',
    country: 'Nigeria'
  }
},
{
  id: 1,
  name: 'Angular Abuja',
  time: '10:00 am',
  date: '9/26/2036',
  price: 599.99,
  imageUrl: '/assets/images/angularconnect-shield.png',
  location: {
    address: '1057 DT',
    city: 'Abuja',
    country: 'Nigeria'
  }
},
];
