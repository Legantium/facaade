import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../src';

storiesOf('Button', module)

    .add('default', () => (
        <Button onClick={action('clicked')}>Button</Button>
    ))

    .add('disabled', () => (
        <Button disabled onClick={action('clicked')}>Button</Button>
    ))