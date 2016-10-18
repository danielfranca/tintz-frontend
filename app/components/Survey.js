import React from 'react';
import {Modal, Button, Form, Input, Dropdown} from 'semantic-ui-react';

const options = [
  { text: 'English', value: 'English' },
  { text: 'French', value: 'French' },
  { text: 'Spanish', value: 'Spanish' },
  { text: 'German', value: 'German' },
  { text: 'Chinese', value: 'Chinese' },
]

export default function Survey(props) {
    return (
        <div>
        <Modal trigger={<Button>Answer Survey</Button>}>
            <Modal.Header>Survey</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <label>Regular Field</label>
                        <Input />
                    </Form.Field>
                    <Form.Field>
                        <label>Multiple Selection Field</label>
                        <Dropdown
                        options={options}
                        placeholder="Choose Language"
                        search
                        selection
                        fluid
                        multiple
                        >
                        </Dropdown>
                    </Form.Field>
                </Form>
            </Modal.Content>
        </Modal>
        </div> );
}
