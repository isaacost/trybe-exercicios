import React from 'react';

//constroi uma função chamada task
const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

//constroi um array
const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends React.Component {
  render() {
    return (
      <ul>{tarefas.map((tarefa) => Task(tarefa))}</ul>
    );
 }
}


export default App;
