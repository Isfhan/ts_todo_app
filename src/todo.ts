// Import types
import { type ITodo } from "./types/todo.js";



export class Todo {


    constructor(private _todoList: ITodo[] = [], private _id: number = 1) { }


    /**
    *  Getter for todo list
    */
    public get todoList() {

        // return todoList
        return this._todoList;
    }


    /**
     * Add todo
     */
    public add(todoText: string): void {

        // Create todo object & Push in todo list
        this._todoList.push({
            id: this._id,
            todoText
        });

        // Increment id
        this._id = this._id + 1;
    }


    /**
     * Update todo
     */
    public update(id: number, todoText: string): boolean {

        // Find todo by id
        const todo: ITodo | undefined = this._todoList.find((todoItem: ITodo): boolean => {
            return todoItem.id == id;
        });

        // If todo exist in todoList
        if (todo) {

            // Edit todo text
            todo.todoText = todoText;

            // Update todo in list
            this._todoList[(id - 1)] = todo;

            // Return true on success
            return true;
        }
        else {

            // Return false on success
            return false;
        }

    }


    /**
     * Delete todo
     */
    public delete(id: number): void {

        // Delete todo by id
        this._todoList = this._todoList.filter((todoItem): boolean => {
            return todoItem.id != id
        });

    }

    /**
     * Find todo
     */
    public find(id: number): undefined | ITodo {

        return this._todoList.find(todo => todo.id == id);

    }
}