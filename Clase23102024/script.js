let task = ["comprar", "estudiar", "Limpieza"];

console.log("Lista de tareas", task);

task.push("Ir a la escuela");

task.splice(3, 1);

task.push("Ir a casa");

/****************USANDO FOR EACH*************** */

let tasks = ["comprar", "estudiar"];

task.forEach((task, index) => {
  console.log(`Tarea ${index} ${task} `);
});
