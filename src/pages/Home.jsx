import { Container, Badge, Card, Col, Row } from "react-bootstrap";
import { useContext } from "react";

import { TodoContext } from "../contexts/TodoContext"





export default function Home() {
    const todos = useContext(TodoContext).todos;

    return (
        <Container>
            <h1 className="my-3" > welcome to your home page ! </h1>
            <h1 className="my-3"> Your Todos , you can see the list of todos that you have created </h1>


            <Row>
                <CardGroup todos={todos} />
            </Row>
        </Container>
    );
}

function CardGroup({ todos }) {

    return todos.map((todo) => {
        const completed = todo.completed;
        const bg = completed ? "success" : "danger";

        return (

            <Col md={4} key={todo.id}>

                <Card className="my-3">

                    <Card.Body>

                        <Card.Title>{todo.title}</Card.Title>

                        <Card.Text>{todo.description}</Card.Text>

                        <Badge bg={bg}>{!completed && "Not"} Completed</Badge>

                    </Card.Body>

                </Card>

            </Col>
        );
    });
}

