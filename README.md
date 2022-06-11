# platzi-store
Curso de Pruebas unitarias con Jest


Instalación de jest para este caso se debe de instalar todas sus dependencias
```bash

npm install --save-dev cheerio@=1.0.0-rc.3
npm install --save-dev --save-exact jsdom jsdom-global


or
npm install jest enzyme enzyme-adapter-react-16 cheerio@=1.0.0-rc.3 --save-dev

```

Para actualizar Snapshots porque hemos realizado cambios necesarios en componentes estáticos
```bash
npx jest --updateSnapshot
```