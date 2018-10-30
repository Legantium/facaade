import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { Chip } from '../src';

storiesOf("Chip", module)

    .add("label only", () => (<Chip label="info thing" />))

    .add("with onClick handler", () => (<Chip label="info thing" onClick={action("chip clicked")} />))

    .add("with onRemove handler", () => (<Chip label="info thing" onRemove={action("remove button clicked")} />))

