import React from 'react';
import About from '../components/About';
import Survey from '../components/Survey';

export default function Home(props) {
    return (
        <div>
            <Survey />
            <div className="ui centered grid" style={{marginTop: '10px'}}>
                <div className="ui small image">
                    <img src="/images/logo.png" />
                </div>
                <div className="row" style={{marginTop: '30px'}}>
                    <div className="ui form">
                      <div className="field">
                        <label>Let me know first about Tintz</label>
                        <input type="email" placeholder="Enter your email" />
                      </div>
                      <div className="ui submit button right floated" style={{marginTop: "-10px"}}>Subscribe</div>
                    </div>
                </div>
                <div className="row">
                    <About onClickSurveyHandler={props.onClickSurveyHandler} />
                </div>
            </div>
        </div>
    );
}
