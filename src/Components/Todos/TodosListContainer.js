import {
    TodosListComponent
} from './TodosListComponent';
import {
    getTodos
} from "../../Store/Actions/todos";
import {
    connect
} from 'react-redux';



const mapStateToProps = state => {
    return {
        todos: state.todosReducer.todos,
        loading: state.todosReducer.loading,
        notification: {
            type: state.todosReducer.notification.type,
            message: state.todosReducer.notification.message
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllTodos: () => dispatch(getTodos())
    };
};

const TodosListContainer = connect(mapStateToProps, mapDispatchToProps)(TodosListComponent);
export default TodosListContainer;