class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if(this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

const stackHelpers = {
  peek(stack) {
    return stack.top.data;
  },
  isEmpty(stack) {
    return stack.top === null;
  },
  display(stack) {
    if(this.isEmpty(stack)) {
      return 'Stack is empty';
    }
    let start = stack;

    while(!this.isEmpty(stack)) {
      console.log(start.pop());
    }
  }
};


function starTrek() {
  let newStack = new Stack();

  newStack.push('kirk');
  newStack.push('spock');
  newStack.push('mccoy');
  newStack.push('scotty');
  newStack.pop();
  newStack.pop();

  stackHelpers.display(newStack);
}

// starTrek()


// O(n)
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let newStack = new Stack();

  for(let i = 0; i < s.length; i++) {
    newStack.push(s[i]);
  }

  let str = '';
  while(!stackHelpers.isEmpty(newStack)) {
    let node = newStack.pop();
    str += node;
  }

  return s === str;
}

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function matchingParentheses(expression) {
  let holding = new Stack();
  for(let i = 0; i < expression.length; i++) {
    let c = expression[i];
    if(c === '(') {
      holding.push(c);
    } else if(c === ')') {
      if(stackHelpers.isEmpty(holding)) {
        return 'you are missing a "("';
      } else {
        holding.pop();
      }
    }
  }

  if(!stackHelpers.isEmpty(holding)) {
    return 'you are mising a ")"';
  }
  return true;
}

// console.log(matchingParentheses('(hello world)'));
// console.log(matchingParentheses('hello world)'));
// console.log(matchingParentheses('(hello world'));

function sortStack(stack) {
  const tempStack = new Stack();

  while(!stackHelpers.isEmpty(stack)) {
    let curData = stack.pop();
    
    while(!stackHelpers.isEmpty(tempStack) && stackHelpers.peek(tempStack) > curData) {
      stack.push(tempStack.pop());
    }
    
    tempStack.push(curData);
  }

  while(!stackHelpers.isEmpty(tempStack)) {
    stack.push(tempStack.pop());
  }
}

let stack = new Stack();
stack.push(3);
stack.push(6);
stack.push(1);
stack.push(2);
stack.push(5);
stack.push(4);

sortStack(stack);
stackHelpers.display(stack);



class StackQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(data) {
    this.stack1.push(data);
  }

  dequeue() {
    if(stackHelpers.isEmpty(this.stack2)) {
      if(stackHelpers.isEmpty(this.stack1)) {
        return 'Error queue is empty';
      }

      while(!stackHelpers.isEmpty(this.stack1)) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}