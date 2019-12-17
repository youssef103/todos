import {
    TodosComponent
} from './TodosComponent';
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

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodosComponent);
export default TodosContainer;