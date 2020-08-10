import React, {useState} from 'react'
import {
    FormGroup,
    InputGroup,
    InputGroupAddon, 
    Button,
    Form, Input
} from 'reactstrap'
import {v4} from 'uuid'

const TodoForm = ({addTodos}) => {
    const [todostring, setTodostring] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(todostring === ""){
            return alert("Please fill the todo!")
        }
        const todo ={
            todostring, 
            id: v4()
        }
        addTodos(todo)
        setTodostring("")
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input type="text" name="todo" id="todo" placeholder="Enter a todo" value={todostring} onChange={
                        e => setTodostring(e.target.value)
                    }/>
                    <InputGroupAddon addonType="prepend">
                        <Button 
                            color="success">Add Todo</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm