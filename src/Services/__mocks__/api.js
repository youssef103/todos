import {
    todos
} from '../../../fixture/todos'

const getAll= async ()=>{
    return await new Promise((resolve, reject)=> {
        resolve([...todos]);
        reject({message: "No Data"})
    })
}


export default {
    getAll
}