import React from 'react';
import About from '../components/About';
import {Grid, Image, Form, Button, Icon, Input, Message, Modal, Header} from 'semantic-ui-react';
var PropTypes = React.PropTypes;


function Home(props) {
    console.log(props);
    let displayStyle = (props.isShowingMessage)?"block":"none";
    return (
        <div>
            <Message onClick={props.onClickCloseMessage} style={{display: displayStyle}}>
                <Message.Content>
                    {props.message}
                </Message.Content>
            </Message>
            <Grid centered columns={1}>
                <Grid.Row>
                    <Grid.Column>
                        <Image src="/images/logo.png" size='small' centered/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Form>
                        <Form.Field>
                            <label>Let me know first about Tintz</label>
                            <Input iconPosition='left'>
                              <Icon name='at' />
                              <input placeholder='Email' />
                            </Input>
                        </Form.Field>
                        <Button onClick={props.onClickSubscribeHandler} type='submit' floated='right'>Subscribe</Button>
                    </Form>
                </Grid.Row>
                <Grid.Row>
                    <About />
                </Grid.Row>
            </Grid>

        </div>
    );
}

Home.propTypes = {
  isSubscribed: PropTypes.bool.isRequired
}

export default Home;
