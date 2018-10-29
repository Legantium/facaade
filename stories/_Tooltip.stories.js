import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tooltip } from '../src';

storiesOf("Tooltip", module)

    .add("on hover (default)", () => (
        <Tooltip overlay={<div>I'm an overlay</div>}
        >Hover Tooltip</Tooltip>
    ))

    .add("on click", () => (
        <Tooltip click overlay={<div>I'm an overlay</div>}
        >Hover Tooltip</Tooltip>
    ))

    .add("on context", () => (
        <Tooltip context overlay={<div>I'm an overlay</div>}
        >Hover Tooltip</Tooltip>
    ))

    .add("manually controlled", () => {
        return (
            <Fragment>
                <Tooltip isOpen={true} overlay={<div>I'm an overlay</div>}
                >Hover Tooltip</Tooltip>
            </Fragment>
        )
    })

    .add("placement: bottom (default)", () => (
        <Tooltip overlay={<div>I'm an overlay</div>}>Hover Tooltip</Tooltip>
    ))

    .add("placement: bottom-left", () => (
        <Tooltip placement="bottom-left" overlay={<div>I'm an overlay</div>}>Hover Tooltip</Tooltip>
    ))

    .add("placement: bottom-right", () => (
        <Tooltip placement="bottom-right" overlay={<div>I'm an overlay</div>}>Hover Tooltip</Tooltip>
    ))

    .add("placement: top", () => (
        <Tooltip placement="top" overlay={<div>I'm an overlay</div>}>Hover Tooltip</Tooltip>
    ))

    .add("placement: top-right", () => (
        <Tooltip placement="top-right" overlay={<div>I'm an overlay</div>}>Hover Tooltip</Tooltip>
    ))

    .add("placement: top-left", () => (
        <Tooltip placement="top-left" overlay={<div>I'm an overlay</div>}>Hover Tooltip</Tooltip>
    ))

