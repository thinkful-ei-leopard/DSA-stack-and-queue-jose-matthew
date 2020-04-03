class _Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


class Queue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(data) {
        const node = new _Node(data)

        if(this.first === null) {
            this.first = node
        }

        if(this.last) {
            this.last.next = node
        }

        this.last = node
    }

    dequeue() {
        if(this.first === null) {
            return;
        }

        const node = this.first
        this.first = this.first.next

        if(node === this.last) {
            this.last = null
        }

        return node.data
    }
}

const queueHelpers = {
    peek(queue) {
        return queue.first.data
    },
    isEmpty(queue) {
        return queue.first === null
    },
    display(queue) {
        if(this.isEmpty(queue)) {
            return 'queue is empty';
          }
          let start = queue;
      
          while(!this.isEmpty(queue)) {
            console.log(start.dequeue());
          }
    },
}

let starTrekQ = new Queue()
starTrekQ.enqueue('kirk')
starTrekQ.enqueue('spock')
starTrekQ.enqueue('uhuru')
starTrekQ.enqueue('sulu')
starTrekQ.enqueue('checkov')

// console.log(queueHelpers.peek(starTrekQ))
starTrekQ.dequeue()
starTrekQ.dequeue()
queueHelpers.display(starTrekQ)



class _DllNode {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DllQueue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(data) {
        const node = new _DllNode(data)

        if(this.first === null) {
            this.first = node
        }

        if(this.last) {
            this.last.next = node
            node.prev = this.last
        }

        this.last = node
    }

    dequeue() {
        if(this.first === null) {
            return 
        }

        const node = this.first
        this.first = this.first.next
        this.first.prev = null

        if(node === this.last) {
            this.last = null
        }

        return node.data
    }
}

let starTrekQ2 = new DllQueue()
starTrekQ2.enqueue('kirk2')
starTrekQ2.enqueue('spock2')
starTrekQ2.enqueue('uhuru2')
starTrekQ2.enqueue('sulu2')
starTrekQ2.enqueue('checkov2')

// console.log(queueHelpers.peek(starTrekQ2))