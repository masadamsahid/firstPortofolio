import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";

class Kontak extends Component{
    render() {
        return(
            <div>
                <Grid className={"grid"}>
                    <Cell col={12}>
                        <div className={"banner-text"}>

                            <img
                                src={"https://media-exp1.licdn.com/dms/image/C5603AQE2-ox_80I8Yg/profile-displayphoto-shrink_800_800/0/1619930750668?e=1628121600&v=beta&t=GMD2uAu0qY3XmqGXCAEdyOpwxs9QTCrIOSRhpM4aYyk"}
                                alt={"avatar"}
                                className={"kontak-img"}
                            />

                            <h1>Keep in Touch</h1>

                            <hr/>
                            <br/>
                            <div className={"social-links"}>
                                <a href={"https://www.twitter.com/"} rel={"noopener noreferrer"} target={"_blank"}>
                                    <i className="fab fa-twitter-square" aria-hidden={"true"}></i>
                                </a>
                                <a href={"https://github.com/masadamsahid"} rel={"noopener noreferrer"} target={"_blank"}>
                                    <i className="fab fa-github-square" aria-hidden={"true"}></i>
                                </a>
                                <a href={"https://www.linkedin.com/in/masadamsahid/"} rel={"noopener noreferrer"} target={"_blank"}>
                                    <i className="fab fa-linkedin" aria-hidden={"true"}></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Kontak;
