import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService 
{
  createDb() {
    const patients = [
      { id: 10, name: 'Alpha', problem:'Brain Tumor', age: 24, image: 'http://nilambar.net/wp-content/uploads/2008/09/first.jpg' },
      { id: 11, name: 'Beta', problem:'Blood', age: 62 , image: 'https://jobs.socialsamosa.com/wp-content/uploads/2015/03/Passport-Size-Pic_Arpita.jpg'  },
      { id: 12, name: 'Gama', problem:'Memory Loss' , age: 12 , image: 'https://orig00.deviantart.net/3ee2/f/2007/273/f/8/passport_size_by_stan522.jpg' },
      { id: 13, name: 'Pie', problem:'Fever' , age: 14 , image: 'http://www.livescanfp.com/images/image_6.jpg' },
      { id: 14, name: 'Theta', problem:'Cancer' , age: 57 , image: 'http://michaelsphotolab.com/yahoo_site_admin/assets/images/Blue_backgrounda.307194417_std.JPG' },
      { id: 15, name: 'Delta', problem:'High BP' , age: 68 , image: 'https://c2.staticflickr.com/6/5023/5675214515_7046fbaf88_b.jpg' },
      { id: 16, name: 'Omega', problem:'Fracture' , age: 45 , image: 'https://images-na.ssl-images-amazon.com/images/I/51oTVlqzzLL._SY450_.jpg' },
      { id: 17, name: 'Sigma', problem:'AIDS' , age: 35 , image: 'http://static.panoramio.com/photos/large/16146340.jpg' },
      { id: 18, name: 'Epsilon', problem:'Hernia' , age: 24 , image: 'http://econnectiveuk.com/Econnective_Print_Services/Passport_Photo/passport.jpg' },
      { id: 19, name: 'Tau', problem:'Heart' , age: 4 , image: 'https://3.imimg.com/data3/TP/AM/MY-15134860/passport-size-photos-250x250.jpg' },
      { id: 20, name: 'Lamda', problem:'High BP' , age: 42 , image: 'https://3.imimg.com/data3/QM/GT/MY-14118221/passport-photo-service-250x250.jpeg' }
    ];
    return {patients};
  }
}
