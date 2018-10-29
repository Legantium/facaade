import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dropdown } from '../src';

storiesOf("Dropdown", module)

    .add("on hover (default)", () => (
        <Dropdown overlay={<div>I'm an overlay</div>}
        >Hover dropdown</Dropdown>
    ))

    .add("on click", () => (
        <Dropdown click overlay={<div>I'm an overlay</div>}
        >Hover dropdown</Dropdown>
    ))

    .add("on context", () => (
        <Dropdown context overlay={<div>I'm an overlay</div>}
        >Hover dropdown</Dropdown>
    ))

    .add("placement: bottom (default)", () => (
        <Dropdown overlay={<div>I'm an overlay</div>}>Hover dropdown</Dropdown>
    ))

    .add("placement: bottom-left", () => (
        <Dropdown placement="bottom-left" overlay={<div>I'm an overlay</div>}>Hover dropdown</Dropdown>
    ))

    .add("placement: bottom-right", () => (
        <Dropdown placement="bottom-right" overlay={<div>I'm an overlay</div>}>Hover dropdown</Dropdown>
    ))

    .add("placement: top", () => (
        <Dropdown placement="top" overlay={<div>I'm an overlay</div>}>Hover dropdown</Dropdown>
    ))

    .add("placement: top-right", () => (
        <Dropdown placement="top-right" overlay={<div>I'm an overlay</div>}>Hover dropdown</Dropdown>
    ))

    .add("placement: top-left", () => (
        <Dropdown placement="top-left" overlay={<div>I'm an overlay</div>}>Hover dropdown</Dropdown>
    ))

