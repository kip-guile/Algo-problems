class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }

  getValue() {
    return this.data
  }

  getNext() {
    return this.next
  }

  setNext(new_next) {
    this.next = new_next
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  size() {
    let count = 0
    while (this.head.next) {
      head = this.head.next
      count++
    }
    return count
  }

  clear() {
    this.head = null
  }

  getLast() {
    let lastNode = this.head
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next
      }
    }
    return lastNode
  }
}
