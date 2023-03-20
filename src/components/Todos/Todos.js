import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Button, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import Item from "./Item/Item";

let tasks = [
    {
        id: 1,
        title: 'Hoc bai ve nha',
        complete: false
    },
    {
        id: 2,
        title: 'Lam bai tap',
        complete: false
    },
    {
        id: 3,
        title: 'Di cho nau com',
        complete: true
    }
]

function Todos(props) {
    const [todos, setTodos] = useState(tasks);
    const [task, setTask] = useState({
        id: Math.floor(Math.random() * 100),
        title: '',
        complete: false
    });

    const addTask = (e) => {
       setTask({...task, title: e.target.value})
    }

    const submitAdd = () => {
        setTodos([...todos, task])
    }

    const completeTask = (id) => {
        let item = todos.filter(todo => todo.id == id);
        item[0].complete = true;
        console.log(todos)
        setTodos([...todos])
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <InputGroup>
                        <Form.Control onChange={addTask} aria-label="Dollar amount (with dot and two decimal places)" />
                        <Button onClick={submitAdd}>Add</Button>
                    </InputGroup>
                    <Table striped>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Task</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        { todos.map((item,index) => (
                            <Item key={index} index={index} item={item} completeTask={completeTask} />
                        ))}
                        </tbody>
                    </Table>
                    <Button variant="success">Show task Complete</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export  default Todos;
