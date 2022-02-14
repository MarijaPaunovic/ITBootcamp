import { v4 as uuidv4 } from "uuid";

export const BookReducer = (state, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return [
                ...state, {
                    id: uuidv4(),
                    title: action.payload.title,
                    author: action.payload.author
                }
            ];
        case "REMOVE_BOOK":
            return state.filter((book) => book.id !== action.payload.id);

        default:
            return state;
    }
}