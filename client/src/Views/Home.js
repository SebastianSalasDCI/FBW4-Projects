import React from 'react'
import { Container, Row, Col, Card, CardImg } from "shards-react";
import {Link} from 'react-router-dom'
import data from '../data/data.json'

export default function Home() {
    // let impar = false;
    let col   = "6";
    // let classimg = ''
    // if(data.groups.length%2 === 1){
    //     impar = true;
    // }
    let cards = data.groups.map((group,index) =>{
        // if(impar && (data.groups.length-1) === index){
        //     classimg=" middleimg"
        // }

        return (
            <Col key={group.name} xs="12" sm="12" md={col} lg={col}>
                <div>
                    <Link style={{ textDecoration: 'none' }} to={`/group/${group.link}`} >
                        <h4 className="projectTitle"> {group.name} </h4>
                        <Card className={"cardClass"}>
                            <CardImg className="homeImg" 
                            src={process.env.PUBLIC_URL +group["front-image"]}/>
                        </Card>
                    </Link>
                </div>
                
            </Col>
        )
    })

    return (
        <div className="generalCont">
            <div className="titleCont">
            <h3>Welcome to FBW4 Projects</h3>
            <h5>Here you will find a small description of the 
                projects presented to you on Thursday 9th of July 2020</h5>
            </div>
            
            <Container className="cardsContainer">
                <Row>
                    {cards}
                </Row>
            </Container>
        </div>
    )
}
