import React from "react"; /** Importamos la Libreria REACT con la cual se trabaja la interfaz */
import ReactDOM from "react-dom/client"; /** Importamos la libreria REACTDOM con la cual se trabajara el DOM */
import {
  Greeting,
  Usercard,
  Message,
} from "./Greeting"; /** Utilizamos esto para importar las diferentes funciones y dentro de los parentesis llamaremos a la función que deseamos usar esto para que el escalado sea mantenible */
import Product from "./Product"; /** Importamos de esta manera ya que dejamos el export por default ya que nos da la opcion de llamarlo por nuestra manera */
import { Button } from "./Button";

import { TaskCard } from "./Task";

import { Saludar } from "./Saludar";

import { Posts } from "./Posts";

import { useState } from "react"; /** Es una biblioteca que es una funcion que al ejecutarla nos regresa un arreglo, que trae dos arreglos, uno es un elemento y el otro es una función */

import { useEffect } from "react"; /**Es una biblioteca que espera como parametro una funcion que ejecutara algo cada vez que surja un cambio */

const root = ReactDOM.createRoot(
  document.getElementById("root")
); /** Inicializamos React */

function Users() {
  const user = {
    firstName: "Joe",
    lastName: "Mcmillan",
  };

  return (
    <div>
      <h1> {user.firstName} </h1>
      <h3> {user.lastName} </h3>
    </div>
  );
}

function Sum() {
  function add(x, y) {
    return x + y;
  }
  return <h1> {add(10, 30)} </h1>;
}

//** Otra manera mas actual de Escribir funciones */
const handleChange = (e) => {
  console.log(e.target.value);
};

/**Arreglo en React */
const users = [
  {
    id: 1,
    name: "Jose",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Lucas",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Mateo",
    image: "https://robohash.org/user3",
  },
];

function Counter(){
  const [counter, setCounter ] = useState(0)
  return (
     <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() =>{
        setCounter(counter + 1)
      }}>Sumar</button>
          <button onClick={() =>{
        setCounter(counter - 1)
      }}>Restar</button>
     </div>
  )
}

function Mensaje(){
  const [mensaje, setMensaje ] = useState('')
  const [counter, setCounter ] = useState(0)

  useEffect(()=>{
    console.log('render')
  }, [counter])

  return (
     <div>
      <input onChange={(e)=>{
        setMensaje(e.target.value)
      }}/>
      <button onClick={()=>{
        alert('El mensaje es ' + mensaje)
      }}>Save</button>
      <hr/>
      <h1>Counter: {counter}</h1>
      <button onClick={() =>{
        setCounter(counter + 1)
      }}>Incrementar</button>
     </div>
  )
}



root.render(
  /**Esta etiqueta se llama fragment y es utilizada para no tener tantos divs en el html, es un contenedor vacio que no contiene nada pero por regla de react cada cosa debe estar dentro de un componente */ <>
    <Greeting title="hola" />
    <Users />
    <Sum />
    <Product />
    <Message name="Oscar" />
    <Message title="Hi" />
    <Message title="Hello World" />
    <Message title="Hola Mundo" />
    <Message name />
    <Message name />
    <Usercard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      addres={{ street: "123 Main Street", city: "New York" }}
    />
    <Usercard
      name="Ryan Gasley"
      amount={1000}
      married={false}
      points={[89, 22.3, 33.2]}
      addres={{ street: "456 Main Street", city: "Washington" }}
    />
    <Button text="Click Me" />
    <Button text="Pay me" />
    <Button text="" />
    <TaskCard ready={false} />
    <Saludar />
    <input id="hola" onChange={handleChange} />
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Enviando Datos del Formu");
      }}
    >
      <h1>Registro de Usuario</h1>
      <button>Send</button>
    </form>
    <Posts />
    <>
      {users.map((user, i) => {
        return (
          <div key={i}>
            <h1 key={i}>{user.name}</h1>
            <img src={user.image} />
          </div>
        );
      })}
    </>
    <Counter/>
    <Mensaje/>
  </>
);
