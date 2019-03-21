/*
  Implementar los componentes Layout y MyTodos SIN EDITAR ESTE MODULO
  
  Layout:
    * Contiene un h1 con el title
  
  MyTodos:
    * Contiene el input y el boton Add del ejercicio anterior
    * Contiene la siguiente lista initial dummy con tareas:
    <ul>
      <li>Tarea 1</li>
      <li>Tarea 2</li>
      <li>Tarea 3</li>
    </ul>
*/

// NO MODIFICAR ///////////////////////////////////

import React from 'react';
import { render } from 'react-dom';

import Layout from './components/layout';
import MyTodos from './components/myTodos';

const App = () => (
  <Layout title="Mis Tareas">
    <MyTodos />
  </Layout>
);

render(<App/>, document.getElementById('root'));
