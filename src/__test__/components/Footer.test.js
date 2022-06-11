
import React from 'react';
import 'jsdom-global/register';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';


describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Render de componente Footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('Render del titulo', () => {
    
    expect(footer.find(".Footer-title").text()).toEqual("Platzi Store");
  });

});




/*Snapshot: Sirve para verificar si el componente sin
lógica tiene la misma estructura, se crea una carpeta __snapshots__
para posteriormente compararlo con el archivo dentro de esta carpeta */

describe('Footer Snapshot', () => {
  test('Comprobar la UI del componente Footer', () =>{
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });

});
