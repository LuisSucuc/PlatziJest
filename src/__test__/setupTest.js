import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter});

// Configuración de fetch para no implementar mocks de manera manual
global.fetch = require("jest-fetch-mock");