class _Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if(this.first === null) {
      this.first = node;
    }

    if(this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if(this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if(node === this.last) {
      this.last = null;
    }

    return node.data;
  }
}

const queueHelpers = {
  peek(queue) {
    return queue.first.data;
  },
  isEmpty(queue) {
    return queue.first === null;
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
};

let starTrekQ = new Queue();
starTrekQ.enqueue('kirk');
starTrekQ.enqueue('spock');
starTrekQ.enqueue('uhuru');
starTrekQ.enqueue('sulu');
starTrekQ.enqueue('checkov');

// console.log(queueHelpers.peek(starTrekQ))
starTrekQ.dequeue();
starTrekQ.dequeue();
// queueHelpers.display(starTrekQ);



class _DllNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DllQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _DllNode(data);

    if(this.first === null) {
      this.first = node;
    }

    if(this.last) {
      this.last.next = node;
      node.prev = this.last;
    }

    this.last = node;
  }

  dequeue() {
    if(this.first === null) {
      return; 
    }

    const node = this.first;
    this.first = this.first.next;
    this.first.prev = null;

    if(node === this.last) {
      this.last = null;
    }

    return node.data;
  }
}

let starTrekQ2 = new DllQueue();
starTrekQ2.enqueue('kirk2');
starTrekQ2.enqueue('spock2');
starTrekQ2.enqueue('uhuru2');
starTrekQ2.enqueue('sulu2');
starTrekQ2.enqueue('checkov2');

// console.log(queueHelpers.peek(starTrekQ2))

function pairDancers(arr) {
  let queue = new Queue();
  for(let i = 0; i < arr.length; i++) {
    let dancer = arr[i];
    console.log(`Dancer ${dancer.name}(${dancer.gender}) has joined the dance floor!`);
    if(queueHelpers.isEmpty(queue)) {
      console.log(`There is no one for ${dancer.name} to dance with! Adding to queue!`);
      queue.enqueue(dancer);
    } else {
      let gender = dancer.gender;
      if(queueHelpers.peek(queue).gender === gender) {
        console.log(`There are only ${gender === 'M' ? 'Males' : 'Females'} in the queue! Adding ${dancer.name} to queue!`);
        queue.enqueue(dancer);
      } else {
        let partner = queue.dequeue();
        console.log(`${dancer.name} and ${partner.name} are now dancing!`);
      }
    }
  }
}

let dancers = [
  {
    name: 'Jane',
    gender: 'F'
  },
  {
    name: 'Frank',
    gender: 'M'
  },
  {
    name: 'John',
    gender: 'M'
  },
  {
    name: 'Sherlock',
    gender: 'M'
  },
  {
    name: 'Madonna',
    gender: 'F'
  },
  {
    name: 'David',
    gender: 'M'
  },
  {
    name: 'Christopher',
    gender: 'M'
  },
  {
    name: 'Beyonce',
    gender: 'F'
  },
];

// pairDancers(dancers);

// At the Ophidian Bank, a single teller serves a long queue of people. 
// New customers join the end of the queue, and the teller will serve a 
// customer only if they have all of the appropriate paperwork. Write a 
// representation of this queue; 25% of the time (random), a customer's 
// paperwork isn't quite right, and it's back to the end of the queue. 
// Show what a few minutes of the bank's lobby would look like.



function serveCustomer(queue) {
  if(Math.random() > 0.5) {
    let newCusomer = `Customer #${Math.floor(Math.random() * Math.floor(100))}`;
    console.log(`${newCusomer} has joined the queue!`);
    queue.enqueue(newCusomer);
  }

  let customer = queue.dequeue();
  console.log(`${customer} has reached the teller!`);

  let hasPaperwork = Math.random() > 0.25;
  if(hasPaperwork) {
    console.log(`${customer} has all the proper paperwork!`);
  } else {
    console.log(`${customer} doesn't have the proper paperwork. Moving to back of queue`);
    queue.enqueue(customer);
  }
}

let queue = new Queue();
for(let i = 0; i < 5; i++) {
  queue.enqueue(`Customer #${Math.floor(Math.random() * Math.floor(100))}`);
}

for(let i = 0; i < 15; i++) {
  serveCustomer(queue);
}