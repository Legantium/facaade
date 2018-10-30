import React from 'react';
import { storiesOf } from '@storybook/react';
import { ChipInput, Chip } from '../src';

import { State, Store } from "@sambego/storybook-state";

const store = new Store({ chips: [] })

storiesOf("ChipInput", module)

    .add("default", () => {

        return (
            <State store={store}>
                <ChipInput onAdd={
                    value => store.set({ chips: [...store.get("chips"), { id: Date.now(), value: value }] })
                }>
                    {store.get("chips").map(({ id, value }) => {
                        console.log(id, value)
                        return <Chip id={id} key={id} value={value} />
                    })}
                </ChipInput>
            </State>
        )
    })