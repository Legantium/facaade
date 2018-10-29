import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TextInput } from '../src';

storiesOf("TextInput", module)

    .add("type:text", () => (
        <TextInput value="value" onChange={action("changed")} className="custom-text-input" />
    ))

    .add("type:email", () => (
        <TextInput type="email" value="abc@domain.com" onChange={action("changed")} />
    ))

    .add("type:password", () => (
        <TextInput type="password" value="nicetry" onChange={action("changed")} />
    ))

    .add("type:number", () => (
        <TextInput type="number" value="123456789" onChange={action("changed")} />
    ))

    .add("type:tel", () => (
        <TextInput type="tel" value="123456789" onChange={action("changed")} />
    ))

    .add("with label", () => (
        <TextInput label="fill this in!" onChange={action("changed")} value="" />
    ))