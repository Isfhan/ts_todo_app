import { type menuItem } from "../types/menu.js";




export const camelCase = (text: string): menuItem => {

    return text.split(' ').map(
        (value, index): string => {

            return (index > 0) ? value.charAt(0).toUpperCase() + value.slice(1) : value;

        }
    ).join('') as menuItem;
}