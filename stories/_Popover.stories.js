import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Popover } from '../src';

storiesOf("Popover", module)

    .add("on hover (default)", () => (
        <Popover overlay={<div>I'm an overlay</div>}
        >Hover Popover</Popover>
    ))

    .add("on click", () => (
        <Popover click keepOverlayOpenOnClick overlay={<a onClick={action('Clickedthis too')}>I'm an overlay</a>}
        >Click Popover</Popover>
    ))

    .add("on context", () => (
        <Popover context overlay={<div>I'm an overlay</div>}
        >Context Popover</Popover>
    ))

    .add("manually controlled", () => {
        return (
            <Fragment>
                <Popover isOpen={true} overlay={<div>I'm an overlay</div>}
                >Hover Popover</Popover>
            </Fragment>
        )
    })

    .add("placement: bottom (default)", () => (
        <Popover overlay={<div>I'm an overlay</div>}>Hover Popover</Popover>
    ))

    .add("placement: bottom-left", () => (
        <Popover placement="bottom-left" overlay={<div>I'm an overlay</div>}>Hover Popover</Popover>
    ))

    .add("placement: bottom-right", () => (
        <Popover placement="bottom-right" overlay={<div>I'm an overlay</div>}>Hover Popover</Popover>
    ))

    .add("placement: top", () => (
        <Popover placement="top" overlay={<div>I'm an overlay</div>}>Hover Popover</Popover>
    ))

    .add("placement: top-right", () => (
        <Popover placement="top-right" overlay={<div>I'm an overlay</div>}>Hover Popover</Popover>
    ))

    .add("placement: top-left", () => (
        <Popover placement="top-left" overlay={<div>I'm an overlay</div>}>Hover Popover</Popover>
    ))

