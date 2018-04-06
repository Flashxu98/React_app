export const getTodos = () => {
    const str = localStorage.getItem('todos');
    if(!str){
        return []
    }
    try{
        return JSON.parse(str);
    }catch(e) {
        return [];
    }
};

export const saveTodos = (todos) => {
    const str = JSON.stringify(todos);
    return localStorage.setItem('todos', str);
};