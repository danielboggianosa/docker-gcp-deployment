const express = require('express');
const app = express();
const PORT = 3000;

// Simulación de datos de tareas
const tasks = [
  { id: 1, title: 'Hacer compras' },
  { id: 2, title: 'Estudiar para el examen' },
  { id: 3, title: 'Ejercicio diario' }
];

// Ruta para obtener la lista de tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
