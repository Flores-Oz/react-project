export function Greeting() {
  /** Los Componentes en React son represantos por funciones */
  const married = true;
  return <h1> {married ? "estoy casado 😳 " : "no estoy casado 🤯 "} </h1>;
  /** el "?" funciona como condicional if y ":" como un else */
}

export function Usercard({name, amount, married, addres}) {
  console.log(name,amount,married,addres)
  return (
    <div>
      <h1>{name}</h1>
      <p>💲{amount}</p>
      <p>{married ? "married":"single"}</p>
      <ul>
        <li>City: {addres.city}</li>
        <li>Address: {addres.street}</li>
      </ul>
    </div>
  )
}

export function Message({title, name="User"}) {
  return <h1> {title}  {name} </h1>
}
