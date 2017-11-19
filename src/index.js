import Vue from 'vue';
import store from './store/';
import TodoList from './components/TodoList';
import './styles/todo.scss';
import router from './router';

const app = new Vue({
    el: '#app',
    router,
    store,
    data: {
        hello: 'world'
    },
    render: h => h(TodoList)
});
