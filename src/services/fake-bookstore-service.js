
export default class FakeBookstoreService {

  _apiBase = 'http://localhost:3030/data';

  getToken = () => {
    return fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBIymwgT5mN6jPFKOpqi2gmVGgoYyKr4oo', {
      method: 'POST',
      body: JSON.stringify({
        email: 'badcoderspaik@gmail.com',
        password: 123456,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).
    then(response => response.json()).
    then(data => data.idToken);
  };

  getBooks = async (url = this._apiBase) => {
    const result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Не удается найти адрес ${url}`);
    }

    return await result.json();
  }

}
