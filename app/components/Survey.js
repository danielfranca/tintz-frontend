import React from 'react';

export default function Survey(props) {
    return (
        <div className="ui modal" style={{padding: "20px"}}>
        <form className="ui form">
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="field">
              <label>Gender</label>
              <select className="ui selection dropdown">
                  <option value="M">Male</option>
                  <option value="F">Female</option>
              </select>
          </div>
        <div className="field">
          <label>Country</label>
          <select className="ui dropdown">
            <option value="">Select Country</option>
            <option value="AF">Afghanistan</option>
            <option value="AX">Åland Islands</option>
          </select>
         </div>
          <div className="inline fields">
            <label htmlFor="fruit">Select your favorite fruit:</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="fruit" tabIndex="0" />
                <label>Apples</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="fruit" tabIndex="0" />
                <label>Oranges</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="fruit" tabIndex="0" />
                <label>Pears</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="fruit" tabIndex="0" />
                <label>Grapefruit</label>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="ui checkbox">
                <input type="checkbox" tabIndex="0"/>
                <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
        </div> );
}
