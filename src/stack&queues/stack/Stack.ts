class StackNode<T> {
  data: T;
  next: StackNode<T>;


  constructor(data: T) {
    this.data = data;
  }
}

class Stack<T> {
  private top: StackNode<T>;

  public pop(): T {
    if (top === null) throw Error('Stack is empty')
    const item: T = this.top.data;
    this.top = this.top.next;
    return item;
  }

  public push(item: T): void {
    const t: StackNode<T> = new StackNode<T>(item);
    t.next = this.top;
    this.top = t;
  }

  public peek(): T {
    if (this.top === null) throw Error('Stack is empty');
    return this.top.data
  }

  public isEmpty(): boolean {
    return this.top === null;
  }
}