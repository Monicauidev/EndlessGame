
import React, { Component } from 'react';
import './EndlessApp.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default class EndlessApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            List: [],
            showSteps: false,
        }
        //Binding events
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const url = "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge";
        axios
            .get(url)
            .then(response => {
                console.log("response", response);
                this.setState({ List: response.data, showSteps: true });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const renderComponent = [];
        if (this.state.List.length) {
            this.state.List.sort((a, b) => parseFloat(a.stepNumber) - parseFloat(b.stepNumber));
            this.state.List.forEach((item) => {
                renderComponent.push(
                    <div className={'col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 "Steps" '}>
                        <h3>{"0"}{item.stepNumber}</h3>
                        <hr className="underline"></hr>
                        <h5>{item.versionContent[0].title}</h5>
                        <p>{item.versionContent[0].body}</p>
                    </div>
                );
            });
        }
        return (
            <div className="main">
                <div className="container">
                    <div className="Endless">
                        <img src={require("../Images/logo-endless.svg")} />
                    </div>
                    <div className="Image">
                        <img src={require("../Images/photo-couch.jpg")} />
                        <div className="centered">
                            <h6>New Games &#38; Accesories</h6>
                            <h2>Monthly Packages.</h2>
                            <h2>Excietment Deliverd Daily</h2>
                            <span>
                                What's the best way to shop for the latest video games
                            </span><br></br>
                            <span> and peripherals? How about never shopping at all?</span>
                            <br></br> <span>You'll get new stuff on your doorstep - every month.</span><br></br>
                            <Button variant="primary" className="GetStarted">GetStarted</Button>
                        </div>
                    </div>
                    <div className="howItWorks">
                        <h5 className="HowItWorksButton" onClick={this.handleClick}>How It Works</h5>
                        <div className="row row-padding">
                            {this.state.showSteps ?
                                renderComponent : null
                            }
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}