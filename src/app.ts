// Import third party packages
import inquirer from "inquirer";
import chalk from "chalk";


// Import custom modules
import {
    askToSelectMenu,
    askUserToEnterTodo,
    askUserToEnterTodoID,
    askUserToEnterTodoUpdateText
} from "./questions.js";
import { camelCase } from "./utils/helpers.js";
import { Todo } from "./todo.js";


// Import types
import { type menuItem } from "./types/menu.js";
import { ITodo } from "./types/todo.js";



export class App {


    constructor(private todo = new Todo()) { }


    /**
     * Show welcome message to user
     */
    public async start(welcomeUser: boolean = true) {

        if (welcomeUser) {

            // Show welcome message to user
            console.log('');
            console.log(chalk.bgRed.white.bold(' Welcome To Typescript Todo App 📝 '));
            console.log('');
        }

        // Prompt Questions and get user input
        const { method }: { method: string } = await inquirer.prompt(
            askToSelectMenu
        );

        // Create function name
        const functionName: menuItem = camelCase(method);

        // Invoke user desire method
        this[functionName]();

    }


    private async addTodo(): Promise<void> {

        // Prompt Questions and get user input
        const { todoText }: { todoText: string } = await inquirer.prompt(
            askUserToEnterTodo
        );

        // Add todo in list
        this.todo.add(todoText);

        // Invoke start agin
        this.start(false);

    }


    private showTodoList(): void {

        if (this.todo.todoList.length) {

            // Loop on todo list
            this.todo.todoList.forEach((item) => {

                // Add colors 
                const id = chalk.red(` (${item.id}) `);
                const text = chalk.green(` ${item.todoText} `);

                // Log todo with color
                console.log(id, text);

            });

        } else {

            // Log message
            console.log('');
            console.log(chalk.bold.red(' Todo list is empty 😑'));
            console.log('');
        }


        // Invoke start agin
        this.start(false);

    }


    private async editTodo() {

        // Prompt Questions and get user input
        const { todoId, todoText }: { todoId: number, todoText: string } = await inquirer.prompt(
            [
                askUserToEnterTodoID,
                askUserToEnterTodoUpdateText
            ]
        );

        // update todo in list
        const response: boolean = this.todo.update(todoId, todoText);

        if (!response) {

            // Log message
            console.log('');
            console.log(chalk.bold.red(' Todo not found! 😑'));
            console.log('');

        }


        // Invoke start agin
        this.start(false);

    }


    private async deleteTodo() {

        // Prompt Questions and get user input
        const { todoId }: { todoId: number } = await inquirer.prompt(
            [
                askUserToEnterTodoID,
            ]
        );

        // find todo in list
        const response: undefined | ITodo = this.todo.find(todoId);

        if (!response) {

            // Log message
            console.log('');
            console.log(chalk.bold.red(' Todo not found! 😑'));
            console.log('');

        } else {

            // delete todo in list
            this.todo.delete(todoId);

        }


        // Invoke start agin
        this.start(false);

    }


    private exit() {

        // Log message
        console.log('');
        console.log(chalk.bold.bgBlue.white(' Thank you for using Typescript Todo App 📝 '));
        console.log('');
    }


}