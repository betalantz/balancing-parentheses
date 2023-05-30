class Stack {
    constructor() {
        this.stack = []
        this.limit = 10
    }

    push(item){
        if (!this.isFull()){
            this.stack.push(item)
        } else {
            throw new Error("Stack is full")
        }
    }

    pop(){
        return this.stack.pop()
    }

    peek(){
        return this.stack[this.size() - 1]
    }

    isEmpty(){
        return this.size() < 1
    }

    isFull(){
        return this.size() >= this.limit
    }

    size(){
        return this.stack.length
    }

    search(target){
        return this.stack.lastIndexOf(target)
    }

    print(){
        console.log(this.stack.join(' <- '))
    }
}

module.exports = Stack