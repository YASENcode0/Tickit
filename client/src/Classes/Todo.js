class Todo {
  #id;

  constructor(title, content) {
    this.#id = 1000;
    this.createdAt = new Date();
    this.updatedAt = null;
    this.inDone = false;
    this.title = title;
    this.content = content;
  }
}

export default Todo;
