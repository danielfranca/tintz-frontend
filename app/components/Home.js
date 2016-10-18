import React from 'react';
import About from '../components/About';
import {Grid, Image, Form, Button, Icon, Input} from 'semantic-ui-react';

export default function Home(props) {
    return (
        <div>
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
                        <Button type='submit' floated='right'>Subscribe</Button>
                    </Form>
                </Grid.Row>
                <Grid.Row>
                    <About onClickSurveyHandler={props.onClickSurveyHandler} />
                </Grid.Row>
            </Grid>
        </div>
    );
}
