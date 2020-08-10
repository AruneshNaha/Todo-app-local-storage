import React from 'react'
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap'
import {FaCheck} from 'react-icons/fa'

const Todos = ({todos, markComplete}) => {
    return (
        <ListGroup className="mb-2 mt-5 items">
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                    {todo.todostring}
                    <span className="float-right" onClick = {() => markComplete(todo.id)}><FaCheck></FaCheck></span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todos