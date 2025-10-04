const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const SERVICIOS_PATH = path.join(__dirname, 'src/assets/data/servicios.json');
const SERVICIOS_DETALLE_PATH = path.join(__dirname, 'src/assets/data/servicios-detalle.json');

app.get('/api/servicios', (req, res) => {
  try {
    const data = fs.readFileSync(SERVICIOS_PATH, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Error al leer servicios' });
  }
});

app.put('/api/servicios', (req, res) => {
  try {
    const servicios = req.body;
    
    if (!Array.isArray(servicios)) {
      return res.status(400).json({ error: 'Debe ser un array de servicios' });
    }
    
    fs.writeFileSync(SERVICIOS_PATH, JSON.stringify(servicios, null, 2), 'utf8');
    
    res.json({ message: 'Servicios actualizados correctamente', servicios });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar servicios' });
  }
});

app.post('/api/servicios', (req, res) => {
  try {
    const nuevoServicio = req.body;
    const data = fs.readFileSync(SERVICIOS_PATH, 'utf8');
    const servicios = JSON.parse(data);
    
    servicios.push(nuevoServicio);
    
    fs.writeFileSync(SERVICIOS_PATH, JSON.stringify(servicios, null, 2), 'utf8');
    
    res.json({ message: 'Servicio agregado', servicio: nuevoServicio });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar servicio' });
  }
});

app.patch('/api/servicios/:id', (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const data = fs.readFileSync(SERVICIOS_PATH, 'utf8');
    let servicios = JSON.parse(data);
    
    const index = servicios.findIndex(s => s.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    
    servicios[index] = { ...servicios[index], ...updates };
    
    fs.writeFileSync(SERVICIOS_PATH, JSON.stringify(servicios, null, 2), 'utf8');
    
    res.json({ message: 'Servicio actualizado', servicio: servicios[index] });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar servicio' });
  }
});

app.delete('/api/servicios/:id', (req, res) => {
  try {
    const { id } = req.params;
    
    const data = fs.readFileSync(SERVICIOS_PATH, 'utf8');
    let servicios = JSON.parse(data);
    
    const serviciosFiltrados = servicios.filter(s => s.id !== id);
    
    if (servicios.length === serviciosFiltrados.length) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    
    fs.writeFileSync(SERVICIOS_PATH, JSON.stringify(serviciosFiltrados, null, 2), 'utf8');
    
    res.json({ message: 'Servicio eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar servicio' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
  console.log(`📝 API disponible en http://localhost:${PORT}/api/servicios`);
});
