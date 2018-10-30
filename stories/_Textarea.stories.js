import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Textarea } from '../src';

import { State, Store } from "@sambego/storybook-state";

const store = new Store({ value: "" })

storiesOf("Textarea", module)

    .add("autogrow textarea", () => {
        store.set({ value: "" })
        return (
            <State store={store}>
                <Textarea autoGrow value={store.get("value")} onChange={e => store.set({ value: e.target.value })} label="fill it" />
            </State>
        )
    })