class Storage {
    constructor (massiv){
        this.massiv = massiv;
    }

    getItems() {
        return this.massiv
    }

    addItem(item) {
        this.massiv.push(item)
    }

    removeItem(item) {
        let del;
        for (let i = 0; i < this.massiv.length; i+= 1) {
            if (this.massiv[i].includes(item)) {
                del = i
            }
        }
        this.massiv.splice(del,1)
    }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);


// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
