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
        <Button size="12px" rounded onClick={action('clicked')}>Button Label</Button>
    ))


storiesOf("Block", module)
    .add("Single block", () => (
        <Block as="section" className="this-is-my-section">
            This is my section
        </Block>
    ))

storiesOf("TextInput", module)
    .add("type:text", () => (<TextInput value="value" onChange={action("changed")} className="custom-text-input" />))
    .add("type:email", () => (<TextInput type="email" value="abc@domain.com" onChange={action("changed")} />))
    .add("type:password", () => (<TextInput type="password" value="nicetry" onChange={action("changed")} />))
    .add("type:number", () => (<TextInput type="number" value="123456789" onChange={action("changed")} />))
    .add("type:tel", () => (<TextInput type="tel" value="123456789" onChange={action("changed")} />))


// storiesOf("Textarea", module)
//     .add("autogrow textarea", () => (<Textarea autoGrow value="123456789" onChange={action("textarea input change")} />)