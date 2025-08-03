import axios from 'axios';

export default {
    state: {
        todos:[
        ]
    },
    mutations: {
        setTodos(state, todos){
            state.todos = todos;
        },
        setTodo(state, newTodo){
            state.todos.unshift(newTodo);
        },
        removeTodo(state, removeId){
            state.todos = state.todos.filter(t => {
                return t.id != removeId
            })
        },
    },
    getters: {
        myTodos(state){
            return state.todos
        }
    },
    actions: {
        async getTodos({commit}){
            let response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            let todos = response.data;
            commit('setTodos', todos);
        },
        async addTodo({commit}, newTodo)
        {
             let res = await
              axios.post('https://jsonplaceholder.typicode.com/todos',
                 newTodo
                );
                commit('setTodo', res.data);
        },
        async deleteTodo(context, removeId){
           await axios.delete('https://jsonplaceholder.typicode.com/todos/${removeId}')
            context.commit('removeTodo', removeId);
        }
    },
};
