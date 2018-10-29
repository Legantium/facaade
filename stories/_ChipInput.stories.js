import React from 'react';
import { storiesOf } from '@storybook/react';
import { ChipInput } from '../src';

storiesOf("ChipInput", module)

    .add("default", () => (<ChipInput />))