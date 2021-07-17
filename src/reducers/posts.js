import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";

export default (posts = [], action) => {
    switch (action.type){
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE:
            // only return posts where the id is NOT equal to the one we just deleted
            return posts.filter((post) => post._id !== action.payload._id)
        default:
            return posts;
    }
}