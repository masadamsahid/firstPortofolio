import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";


const fs = require('fs');
const path = require('path');
const commandLine = 'https://media-exp1.licdn.com/dms/image/C5622AQEzxs-ZKGPfaw/feedshare-shrink_2048_1536/0/1623010907421?e=1625702400&v=beta&t=p_P0zAzmOKYeEavaKOCJQ2EZpGnMdzOuGxayUdHtBwE';
const htmlCSS = 'https://media-exp1.licdn.com/dms/image/C5622AQEHSSuou71q3w/feedshare-shrink_2048_1536/0/1623010905967?e=1625702400&v=beta&t=AjF80fRDKrbOBcNv9Z6n2z9n0I-mhjIWlKQBBEyj8tU';
const javaScript = 'https://media-exp1.licdn.com/dms/image/C5622AQFSS1cy0AGRnw/feedshare-shrink_2048_1536/0/1623010907732?e=1625702400&v=beta&t=5cfZgbKYBXAbRr1GVOa06Ywu3GG27YpMZ3nEaam_BkA';
const SQL = 'https://media-exp1.licdn.com/dms/image/C5622AQHJ6gr1ezDDkA/feedshare-shrink_2048_1536/0/1623010906337?e=1625702400&v=beta&t=b_k1gGH9hQ_xjlSQC2Cg-ccUcWEKjE5llEWCqblCJo0';
const webDevPath = 'https://media-exp1.licdn.com/dms/image/C5622AQGUshmUWJdk2w/feedshare-shrink_2048_1536/0/1623010908276?e=1625702400&v=beta&t=1AEwRMk733J9qTB7K76S6ID8XC-4eMOw_06W6_vzLEA';
const python = 'https://media-exp1.licdn.com/dms/image/C5622AQFWXvZwzLyULg/feedshare-shrink_2048_1536/0/1623010907728?e=1625702400&v=beta&t=83nTMkpPA5Nm3Gnm2M-Wi1a5dYUjxkLH1qWmLn66MNI';

class Sertifikat extends Component{
    render() {
        return(
            <div>
                <Grid className={"grid"}>
                    <Cell col={12}>
                        <h1 style={{borderBottom:'2px solid black', width:"fit-content", margin:"auto"}}>
                            Certificates
                        </h1>
                        <div className={"contents flex-container"}>
                            <div className={"flex-items certif-container"}>
                                <img src={webDevPath}/>
                            </div>
                            <div className={"flex-items certif-container"}>
                                <img src={htmlCSS}/>
                            </div>
                            <div className={"flex-items certif-container"}>
                                <img src={javaScript}/>
                            </div>
                            <div className={"flex-items certif-container"}>
                                <img src={SQL}/>
                            </div>
                            <div className={"flex-items certif-container"}>
                                <img src={python}/>
                            </div>
                            <div className={"flex-items certif-container"}>
                                <img src={commandLine}/>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Sertifikat;
