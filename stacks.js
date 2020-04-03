class _Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        if(this.top === null) {
            this.top = new _Node(data, null)
            return this.top
        }

        const node = new _Node(data, this.top)
        this.top = node
    }

    pop() {
        const node = this.top
        this.top = node.next
        return node.data
    }
}

const stackHelpers = {
    peek(stack) {
        return stack.top
    },
    isEmpty(stack) {
        return stack.top === null
    },
    display(stack) {
        if(stack.top === null) {
            return `Stack is empty`
        }
        let start = stack

        while(start.top !== null) {
            console.log(start.pop())
        }
    }
}


function starTrek() {
    let newStack = new Stack()

    newStack.push('kirk')
    newStack.push('spock')
    newStack.push('mccoy')
    newStack.push('scotty')
    newStack.pop()
    newStack.pop()

    stackHelpers.display(newStack)
}

// starTrek()


// O(n)
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let newStack = new Stack()

    for(let i = 0; i < s.length; i++) {
        newStack.push(s[i])
    }

    let str = ''
    while(!stackHelpers.isEmpty(newStack)) {
        let node = newStack.pop()
        str += node
    }

    return s === str
}

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function matching() {
    // checking if the next character
}