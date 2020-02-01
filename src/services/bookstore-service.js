
export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Javascript: Полное руководство',
        author: 'Дэвид Флэнаган',
      },
      {
        id: 2,
        title: 'Javascript шаблоны',
        author: 'Стоян Стефанов',
      },
      {
        id: 3,
        title: 'Новая большая книга CSS',
        author: 'Дэвид Мак Фарланд',
      },
    ];
  }
}
