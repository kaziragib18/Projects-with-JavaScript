class Node {
  constructor(value) {
    this.value = value,
      this.prev = null,
      this.next = null
  }
}

class DoublyLinkedList {
  constructor(value) { //initialized  DoublyLinkedlist
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  //append(value) //at in the end
  append(value) {
    let newNode = new Node(value); //initialized added node
    newNode.prev = this.tail;
    this.tail.next = newNode; //let list tail = added node
    this.tail = newNode; //let pointer refer to added node
    this.length++;
    return this.printList();
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode);
      currentNode = currentNode.next;
    }
    return array;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head; //handle new added node first
    this.head.prev = newNode; //now handle the node in Linkedlist
    this.head = newNode;  //assgin the new head
    this.length++;
    return this.printList();
  }

  insert(index, value) {
    //check params
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      return this.append(value);
    }
    let newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1);
    let follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    return this.printList();
  }

  traverseToIndex(index) { //to find the specific node we want
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index === 0) {
      let new_head = this.traverseToIndex(1);
      this.head = new_head;
      new_head.prev = null;
    } else {
      let leader = this.traverseToIndex(index - 1);
      let unwantedNode = leader.next;
      let follower = unwantedNode.next;
      leader.next = follower;
      follower.prev = leader;
    }

    this.length--;
    return this.printList();
  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 88);
myLinkedList.insert(0, 100);
myLinkedList.remove(0);