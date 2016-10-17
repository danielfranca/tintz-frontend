import React from 'react';
import About from '../components/About';

function Home(props) {
    return (
        <div>
            <div className="ui container">
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
                        <About />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
