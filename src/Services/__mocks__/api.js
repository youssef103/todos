import {
    todos
} from '../../../fixture/todos'
export default {
    getAll : () => {
        return Promise.resolve([...todos])
    }
}