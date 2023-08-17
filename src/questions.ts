export const askToSelectMenu = [
    {
        name: "method",
        type: "rawlist",
        message: "Select which operation you want to perform : ",
        choices: [
            'Show Todo List',
            'Add Todo',
            'Edit Todo',
            'Delete Todo',
            'Exit'
        ],
        filter(val: string) {
            return val.toLowerCase();
        },

    }
];


export const askUserToEnterTodo = [
    {
        name: "todoText",
        type: "string",
        message: "Enter Todo Text 🖋 : ",
    }
];


export const askUserToEnterTodoID = {

    name: "todoId",
    type: "number",
    message: "Enter Todo ID 💡 : ",
    validate(input: number): string | boolean | Promise<string | boolean> {

        if (!isNaN(input)) {
            return true;
        }
        return "Please enter a valid todo id";
    },
}


export const askUserToEnterTodoUpdateText = {
    name: "todoText",
    type: "string",
    message: "Enter Updated Todo Text 🖋 : ",
}
