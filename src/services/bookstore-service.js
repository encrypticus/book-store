
export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Javascript: Полное руководство',
      author: 'Дэвид Флэнаган',
      price: '32$',
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      title: 'Javascript шаблоны',
      author: 'Стоян Стефанов',
      price: '42$',
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
    },
    {
      id: 3,
      title: 'Новая большая книга CSS',
      author: 'Дэвид Мак Фарланд',
      price: '100$',
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
    },
  ];

  getBooks() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.data);
      }, 2000);
    });
  }
}
