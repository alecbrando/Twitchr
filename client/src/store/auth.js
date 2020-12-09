import Cookies from 'js-cookie';
const SET_USER = "auth/SET_USER";
const CREATE_USER = "auth/CREATE_USER";
const REMOVE_USER = "auth/REMOVE_USER";
const SET_USERS = "auth/SET_USERS";

export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
};

export const setAllUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const removeUser = () => ({
    type: REMOVE_USER,
  });

export const createUser = user => ({
    type: CREATE_USER,
    user,
})

export const logout = () => async dispatch => {
    const csrfToken = Cookies.get("XSRF-TOKEN");
    const res = await fetch('/api/session', {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'XSRF-TOKEN': csrfToken
      }
    });
    if (res.ok) {
      dispatch(removeUser());
    }
  }


  export const allUsers = () => async dispatch => {
    const response = await fetch('/api/session/users');
    if (response.ok) {
        const { users } = await response.json();
        dispatch(setAllUsers(users));
    }
}

export const signup = (username, email, password) => async dispatch => {
        const csrfToken = Cookies.get("XSRF-TOKEN");
        const response = await fetch('/api/users', {
            method: 'post',
            headers: { 
                'Content-Type': 'application/json',
                "XSRF-TOKEN": csrfToken 
            },
            body: JSON.stringify({ username, email, password }),
        });
        if (response.ok) {
            const { user } = await response.json();
            dispatch(createUser(user));
        }
}


export const login = (username, password) => {
    return async dispatch => {
        const csrfToken = Cookies.get("XSRF-TOKEN");
        const res = await fetch('/api/session', {
            method: 'put',
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": csrfToken
            },
            body: JSON.stringify({ username, password })
        })
        res.data = await res.json();
        if (res.ok) {
            dispatch(setUser(res.data.user))
        }
        return res;
    }
}

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return action.user;
        case CREATE_USER:
            return action.user
        case REMOVE_USER:
            return {};
        case SET_USERS:
            return {...state, users: action.users};
        default:
            return state;
    }
}