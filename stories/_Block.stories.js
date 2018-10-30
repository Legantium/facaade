import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Block } from '../src';

storiesOf("Block", module)

    .add("Single block", () => (
        <Block xs style={{ background: "red" }} justify="flex-start" padding={24}>Block 1</Block>
    ))

    .add("Three columns", () => (
        <Block spacing={12} xsSpacing={32} compact wrap>
            <Block xs={6} style={{ background: "red" }}>Column 1</Block>
            <Block xs={6} style={{ background: "blue" }}>Column 2</Block>
            <Block xs={6} style={{ background: "green" }}>Column 3</Block>
        </Block>
    ))

    .add("Section", () => (
        <Block as="section" xs style={{ background: "red" }} justify="flex-start" padding={24}>Block 1</Block>
    ))