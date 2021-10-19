import React from "react";
import MenuItem from "../menu-items/menu-items";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';

class Directory extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          categories: [
            {
              name: "dairy",
              id: 1,
              linkUrl: "/dairy",
              src : "",
              rating:3,
            },
            {
              name: "veggies",
              id: 2,
              linkUrl: "/veggies",
              src : "",
              rating:4,
            },
            {
              name: "fruits",
              id: 3,
              linkUrl: "/fruits",
              src: "",
              rating:5,
            },
            {
                name: "Grocery",
                id: 3,
                linkUrl: "/grocery",
                src: "",
                rating:5,
                
            },
            {
                name: "snackes",
                id: 4,
                linkUrl: "/snackes",
                src: "",
                rating:4,
            }
          ],
        };
    }

    render() {
        return( <div className="directory-component">
            <p>this is directory</p>
            <Container>
                <Row>
            {
                this.state.categories.map(({name}) =>(
                    <Col md="4" className="columns">
                    <MenuItem categoryname = {name}/>
                    </Col>
                ))
            }
              </Row>
            </Container>
        </div>)
    }

}


export default Directory;