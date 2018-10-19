import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
    Button,
    Block,
    TextInput,
    Textarea
} from '../src';


storiesOf('Button', module)

    .add('with text', () => (
        <Button onClick={action('clicked')}>Button Label</Button>
    ))


storiesOf("Block", module)
    .add("Single block", () => (
        <Block>
            <Block xs={16} smHide style={{ background: "red" }}>Content</Block>
        </Block>
    ))

storiesOf("TextInput", module)
    .add("type:text", () => (<TextInput value="value" onChange={action("text input change")} className="custom-text-input" />))
    .add("type:email", () => (<TextInput type="email" value="abc@domain.com" onChange={action("email input change")} />))
    .add("type:password", () => (<TextInput type="password" value="nicetry" onChange={action("password input change")} />))
    .add("type:number", () => (<TextInput type="number" value="123456789" onChange={action("number input change")} />))
    .add("type:tel", () => (<TextInput type="tel" value="123456789" onChange={action("tel input change")} />))


// storiesOf("Textarea", module)
//     .add("autogrow textarea", () => (<Textarea autoGrow value="123456789" onChange={action("textarea input change")} />)