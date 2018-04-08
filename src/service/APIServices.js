import {getToken} from "./StorageServices";

const BASE_URL = 'https://uetcc-todo-app.herokuapp.com';

const _createRequest = (args) => {
    const {route} = args;
    delete args.route;

    const url = BASE_URL + route;
    const request = new Request(url, args);

    return fetch(request)
        .then(_handleResponse);
};

const _createAuthRequets = (args) => {
    const token = getToken();

    const defaultHeaders = {
        'Authorization': token
    };

    const {headers} = args;

    return _createRequest({
        ...args,
        headers: {
            ...defaultHeaders,
            ...headers,
        }
    });
};

const _handleResponse = (response) => {
    return response.json();
};

export const fetchTodos = () => {
    return _createAuthRequets({
        route: '/todos'
    });
};

export const createTodo = (text) => {
    return _createAuthRequets({
        route: '/todos',
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            title: text
        })
    });
};

export const deleteTodo = (id) => {
    return _createAuthRequets({
        route: `/todos/${id}`,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'DELETE',
    });
};

export const toggleTodo = (id) => {
    return _createAuthRequets({
        route: `/todos/${id}/toggle`,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    });
};

export const register = ({email, password, name}) => {
    return _createRequest({
        route: '/register',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            name,
        })
    });
};

export const login = ({email, password}) => {
    return _createRequest({
        route: '/login',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
        })
    });
};