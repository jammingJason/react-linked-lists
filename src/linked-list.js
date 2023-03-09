import React from 'react';

/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    // Check to see if this list is empty
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length++;
    console.log(this);
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    // this.head.previous = 'LLL';
    const newNode = new Node(val);
    const currNode = this.head;
    if (this.head === null) this.tail = newNode;
    if (this.head !== null) this.head.previous = newNode;
    // if (this.head !== null) this.head.next.previous = currNode;
    this.head = newNode;
    this.head.next = currNode;

    this.length++;
    // console.log(this);
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // currNode = this;
      this.tail = this.tail.previous;
      // this.tail.previous = null;
      this.tail.next = null;
    }
    this.length--;
    // console.log(this);
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }
    this.length--;

    console.log(this);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    console.log('THIS IS THE LENGTH ===> ', this.length);
    if (idx < this.length - 1) {
      let currNode = this.head;
      for (let x = 0; x < idx; x++) {
        currNode = currNode.next;
      }

      console.log(currNode.val);
    } else {
      console.error('NUMBER OUT OF RANGE');
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    console.log('THIS IS THE LENGTH ===> ', this.length);
    if (idx < this.length - 1) {
      let currNode = this.head;
      for (let x = 0; x < idx; x++) {
        currNode = currNode.next;
      }
      currNode.val = val;
      console.log(this);
    } else {
      console.error('NUMBER OUT OF RANGE');
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < this.length - 1) {
      let currNode = this.head;
      let newNode = new Node(val);
      for (let x = 0; x < idx; x++) {
        currNode = currNode.next;
      }
      console.log('THIS IS THE CURRENT NODE ===> ', currNode);

      // Sets the new Node's next property to the current Node
      newNode.next = currNode;
      //  New Node's previous become current Node's previous
      newNode.previous = currNode.previous;

      //  Previous Node's next property set to new node
      currNode.previous.next = newNode;

      // //  Current Node's previous becomes the new node
      currNode.previous = newNode;

      console.log(this);
    } else {
      console.error('NUMBER OUT OF RANGE');
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx <= this.length - 1) {
      let currNode = this;
      for (let x = 0; x < idx; x++) {
        currNode = currNode.next;
      }
      console.log('THIS IS THE CURRENT NODE ===> ', currNode);

      if (this.length !== 1) {
        //  Change current Node previous' next to current Node's next
        currNode.previous.next = currNode.next;
        //  CHange current Node next's previous to current Node's previous
        currNode.next.previous = currNode.previous;
      } else {
        this.head = null;
        this.tail = null;
        this.length = 0;
      }

      console.log(this);
    } else {
      console.error('NUMBER OUT OF RANGE');
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let currNode = this.head;
    let count = 0;
    for (let x = 0; x < this.length; x++) {
      count = count + currNode.val;
      // console.log(currNode.val);
      currNode = currNode.next;
    }
    console.log(count / this.length);
  }
}

export { Node, LinkedList };
