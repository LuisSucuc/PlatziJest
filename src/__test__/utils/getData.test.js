import getData from "../../utils/getData";

describe('Fetch API', () =>{
  beforeEach(() => {
    fetch.resetMocks();
  });


  test('Llamar una API y retornar datos', () => {
  
    fetch.mockResponseOnce(JSON.stringify({data : '12345'}))

    getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345')
      });
    
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
    /*
    const payload = ProductMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload
    };
    expect(actions.addToCart(payload)).toEqual(expected)*/
  });
});
