import { SET_IMAGE, LOAD_IMAGE }  from '../actions';

export default function picReducer(state = [], action) {
    switch (action.type) {
        case SET_IMAGE:
            return action.pictures;
        case LOAD_IMAGE:
            return [...action.pictures];
        default:
            return state;
    }
}