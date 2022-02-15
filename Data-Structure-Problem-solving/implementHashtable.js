class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) %
        this.data.length
      console.log(hash)
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      console.log(this.data)
    }
    this.data[address].push([key, value])
    return this.data
  }//O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }//O(1)
    return undefined
  }

  keys() {
    const keysArray = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        console.log(this.data[i])
        keysArray.push(this.data[i][0][0])
      }
    } v
    return keysArray
  }
}

const myHashTable = new HashTable(50);
// myHashTable._hash('grapes')
myHashTable.set('grapes', 5000);
myHashTable.set('mangoes', 99);
myHashTable.set('oraanges', 5);
myHashTable.keys();  