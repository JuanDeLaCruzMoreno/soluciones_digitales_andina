import { Component } from '@angular/core';

interface Item {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  items: Item[] = [];
  nextId = 1;

  // Para edición simple en-línea
  editingId: number | null = null;
  editModel: Partial<Item> = {};

  constructor(){
    this.loadMock();
  }

  loadMock(){
    this.items = [
      { id: this.nextId++, nombre: 'Servicio Web', categoria: 'Web', precio: 1200000, disponible: true },
      { id: this.nextId++, nombre: 'Diseño UX/UI', categoria: 'UX/UI', precio: 800000, disponible: true },
      { id: this.nextId++, nombre: 'Automatización', categoria: 'Automation', precio: 1500000, disponible: false },
    ];
  }

  addItem(){
    const nuevo: Item = { id: this.nextId++, nombre: 'Nuevo servicio', categoria: 'General', precio: 0, disponible: true };
    this.items = [nuevo, ...this.items];
    this.startEdit(nuevo);
  }

  startEdit(item: Item){
    this.editingId = item.id;
    this.editModel = { ...item };
  }

  saveEdit(){
    if (this.editingId == null) return;
    this.items = this.items.map(i => i.id === this.editingId ? { ...(i as Item), ...(this.editModel as Item) } : i);
    this.cancelEdit();
  }

  cancelEdit(){
    this.editingId = null;
    this.editModel = {};
  }

  deleteItem(id: number){
    const ok = confirm('¿Eliminar este elemento?');
    if (!ok) return;
    this.items = this.items.filter(i => i.id !== id);
    if (this.editingId === id) this.cancelEdit();
  }
}
