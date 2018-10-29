import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Textarea } from '../src';

storiesOf("Textarea", module)

    .add("autogrow textarea", () => (<Textarea autoGrow value="123456789" onChange={action("textarea input change")} label="fill it" />))