import * as UserActions from './user.actions';
import { User } from './user.model';

export type Action = UserActions.All;

const defaultState: User = {
    user: 'No conectado!'
};

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};

export function userReducer(state: User = defaultState, action: Action) {
    console.log(action.type, state);

    switch (action.type) {
        case UserActions.CREATE:
            return newState(state, {user: action.payload});
        case UserActions.RESET:
            return defaultState;
        default:
            return state;
    }
}
