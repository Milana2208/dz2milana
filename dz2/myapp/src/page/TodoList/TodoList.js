import { useState } from "react";
import classes from './todolist.module.css';
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import List from "../../components/List/List";
const TodoList = () => {
    const [ isShow, setIsShow ] = useState(false);
    const [ newTask, setNewTask ] = useState('Пусто');
    const [newSerch, setSerch] = useState('поиск')

    const links = [
        {
            id:1 ,
            task: 'coding'
        },
        {
            id:2,
            task: 'eat'
        },
        {
            id:3,
            task: 'sleep'
        }
    ]
    const handleShow = () => {
        setIsShow(!isShow);
    };
    const handleChangeText = (text) => {
        setNewTask(text);
        console.log(newTask, 'new text')
    }
    const handleSerch = (text) => {
        setSerch(text)
    }
    return (
        <div className={classes.wrapper}>
            <Button handleShow={handleShow}>
                Добавить
            </Button>
            <List links={links}/>
            { isShow && <Modal handleShow={handleShow}>
                <p>{newTask}</p>
                <input type="text" onChange={(event) =>  handleChangeText(event.target.value) }  />
                <Button>
                    Добавить
                </Button>
                <p>{newSerch}</p>
                <input type="text" onChange={(event) =>  handleSerch(event.target.value) }  />
                <Button>
                    Добавить
                </Button>
                <button onClick={handleShow}>Close</button>
            </Modal> }
            <Button classN={'.addButton'}>fdsfd</Button>

        </div>
    )
}


export default TodoList;
