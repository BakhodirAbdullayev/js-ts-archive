class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // O(n)
  log() {
    if (this.isEmpty()) {
      console.log("List is empty.");
    } else {
      let res = "",
        current = this.head;
      while (current) {
        res += `${current.value} `;
        current = current.next;
      }
      console.log(res);
    }
  }

  // O(1) time complexity
  prepend(value) {
    const node = new Node(value);
    if (!this.isEmpty()) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }

  // O(n) time complexity
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return new Error("Invalid index");
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      // index-1, chunki indexda yangi node bo'lishi kerak, biz esa undan oldingi elementni olamiz va undagi next, yani undan keyingi bo'lishi kerak bo'lgan elementni node bilan almashtiramiz, uni nodening nextiga joylaymiz.
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
        index--;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode = null;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) return null;
    let isFind = false;
    if (this.head.value === value) {
      this.head = this.head.next;
      isFind = true;
    } else {
      let prev = this.head;
      while (prev.next) {
        if (prev.next.value === value) {
          prev.next = prev.next.next;
          isFind = true;
          break;
        }
        prev = prev.next;
      }
    }
    this.size--;
    return isFind ? value : null;
  }

  find(value) {
    let count = 0,
      prev = this.head;

    while (prev) {
      if (prev.value === value) {
        return count;
      }
      prev = prev.next;
      count++;
    }

    return -1;
  }

  reverse() {
    let prev = null,
      current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.insert(15, 1);
list.insert(5, 0);
console.log(list.log());
list.reverse();

console.log(list.log());
