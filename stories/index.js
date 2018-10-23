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
        <Block xs justify="flex-start">Block 1</Block>
    ))

    .add("Three columns", () => (
        <Block wrap mdNowrap lgHide>
            <Block xs>Column 1</Block>
            <Block xs>Column 2</Block>
            <Block xs>Column 3</Block>
        </Block>
    ))

storiesOf("TextInput", module)

    .add("type:text", () => (<TextInput value="value" onChange={action("changed")} className="custom-text-input" />))

    .add("type:email", () => (<TextInput type="email" value="abc@domain.com" onChange={action("changed")} />))

    .add("type:password", () => (<TextInput type="password" value="nicetry" onChange={action("changed")} />))

    .add("type:number", () => (<TextInput type="number" value="123456789" onChange={action("changed")} />))

    .add("type:tel", () => (<TextInput type="tel" value="123456789" onChange={action("changed")} />))

    .add("with label", () => (<TextInput label="fill this in!" value="" />))

storiesOf("Textarea", module)

    .add("autogrow textarea", () => (<Textarea autoGrow value="123456789" onChange={action("textarea input change")} label="fill it" />))