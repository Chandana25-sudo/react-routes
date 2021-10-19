import React from "react";
import MenuItem from "../menu-items/menu-items";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import yogaimg from '.././assests/yoga-img.png';
// import dairy from '../assests/da'

class Directory extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          categories: [
            {
              name: "dairy",
              id: 1,
              linkUrl: "/dairy",
              src : 'https://www.dairyfoods.com/ext/resources/DF/2020/August/df-100/GettyImages-1194287257.jpg?1597726305',
              description : "Here is the dairy products",
              rating:3,
            },
            {
              name: "veggies",
              id: 2,
              linkUrl: "/veggies",
              src : "https://image.shutterstock.com/image-photo/party-table-setting-various-veggie-260nw-1400144090.jpg",
              description : "Here is the veggies products",
              rating:4,
            },
            {
              name: "fruits",
              id: 3,
              linkUrl: "/fruits",
              description : "Here is the fruits products",
              src: "https://www.diagnosisdiet.com/assets/images/c/fruit-og-d176ef00.jpg",
              rating:5,
            },
            {
                name: "Grocery",
                id: 3,
                linkUrl: "/grocery",
                description : "Here is the grocery products",
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-r_ZF8_Krk7S98Mb0_9w6q2IGQNZvbK-Y6w&usqp=CAU",
                rating:5,
                
            },
            {
                name: "snackes",
                id: 4,
                linkUrl: "/snackes",
                description : "Here is the snackes products",
                src: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIbQDCyXAOyLKCIXhwpaFGh4Amqtemxnnjdw&usqp=CAU",
                rating:4,
            }
          ],
        };
    }

    render() {
        return( <div className="directory-component">
            <h2>Menu Lists</h2>
            <Container>
                <Row>
            {
                this.state.categories.map((category) =>(
                    <Col md="4" className="columns">
                    <MenuItem categoryname = {category}/>
                    </Col>
                ))
            }
              </Row>
            </Container>
        </div>)
    }

}


export default Directory;