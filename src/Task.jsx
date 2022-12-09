import "./Task.css";

export function TaskCard({ready}) {
  return (
    <div className="card">
      <h1>Mi Primer Tarea</h1>
      <span className={ready ? 'bg-green': 'bg-red'}>{ready == true ? "Tarea Realizada" : "Tarea Pendiente"}</span>
    </div>
  );
}
