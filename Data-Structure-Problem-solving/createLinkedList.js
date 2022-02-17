// 10 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

//Singly linked list
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = {
      value: value,
      next: null
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList()
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++
    }
    return currentNode;
  }
  delete(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    //check params
    if (!this.head.next) {
      return this.head;
    }
    //printlist: [1, 10, 16, 88] 
    let first = this.head; // grab 1
    this.tail = this.head; // after line 106, now tail is now 1
    let second = first.next; // grab 10

    //printlist: [1, 10, 16, 88] 

    while (second) { //if second node exists or has a value
      const temp = second.next; //new reference that hold 16
      second.next = first; // 10 points to first means 1
      first = second; //the var first which was head becomes 10
      second = temp; // second becomes 16
    }
    this.head.next = null; //1 points to null
    this.head = first; //88
    return this.printList()
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(22, 54);
myLinkedList.delete(2);
myLinkedList.printList();