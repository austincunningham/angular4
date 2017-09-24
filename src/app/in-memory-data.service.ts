import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Superman' },
      { id: 12, name: 'Batman' },
      { id: 13, name: 'Spiderman' },
      { id: 14, name: 'Ironman' },
      { id: 15, name: 'Thor' },
      { id: 16, name: 'Hulk' },
      { id: 17, name: 'Captain America' },
      { id: 18, name: 'Antman' },
      { id: 19, name: 'Wonder Woman' },
      { id: 20, name: 'Flash' }
    ];
    return {heroes};
  }
}
