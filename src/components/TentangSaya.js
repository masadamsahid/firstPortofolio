import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";
import "../App.css"

class TentangSaya extends Component{
    render() {
        return(
            <div>
                <Grid className={"grid"}>
                    <Cell col={12}>
                        <div className={"contents"}>
                            <img
                                src={"https://media-exp1.licdn.com/dms/image/C5603AQE2-ox_80I8Yg/profile-displayphoto-shrink_800_800/0/1619930750668?e=1628121600&v=beta&t=GMD2uAu0qY3XmqGXCAEdyOpwxs9QTCrIOSRhpM4aYyk"}
                                alt={"avatar"}
                                style={{width:'20%', borderRadius:'2em'}}
                            />
                            <h1>Maulana Adam Sahid</h1>
                            <h6>Just an Ordinary Student</h6>

                            <div className={"content-sec"}>
                                <h3>About-Me</h3>
                                <p>
                                    I'm currently attending my third year of Computer and Information System at UGM
                                </p>
                            </div>
                            <div className={"content-sec"}>
                                <h3>Skills, Tools, & Techs</h3>
                                <ul>
                                    <li>Web Development</li>
                                    <li>UI Design</li>
                                    <li>Adobe XD</li>
                                    <li>Adob Illustrator</li>
                                    <li>HTML & CSS</li>
                                    <li>JavaScript</li>
                                    <li>NodeJS</li>
                                    <li>ReactJS</li>
                                    <li>MySQL</li>
                                    <li>MongoDB</li>
                                    <li>PHP</li>
                                    <li>C++</li>
                                    <li>Python</li>
                                    <li>Machine Learning</li>
                                </ul>
                            </div>
                            <div className={"lang-sec"}>
                                <h3>Language Skills</h3>
                                <ul className={"flex-container"}>
                                    <div className={"flex-item"}>
                                        <li>Indonesian/Bahasa Indonesia</li>
                                        <p>Native</p>
                                    </div>
                                    <div className={"flex-item"}>
                                        <li>Javanese/Basa Jawa</li>
                                        <p>Native</p>
                                    </div>
                                    <div className={"flex-item"}>
                                        <li>English</li>
                                        <p>Limited working proficiency</p>
                                    </div>
                                    <div className={"flex-item"}>
                                        <li>Arabic/الغة العربية</li>
                                        <p>Begginer</p>
                                    </div>
                                </ul>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default TentangSaya;
