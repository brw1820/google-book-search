import React from 'react';
import Nav from "../../components/Nav/Nav";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
// import Card from "./components/Card/Card";
import Form from "../../components/Form/Form";

const Home = () => {
    return (
        <div>
            <Nav />
            <Form />
            <Jumbotron />
        </div>
    );
};

export default Home;