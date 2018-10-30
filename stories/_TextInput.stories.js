import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextInput } from '../src';
import { State, Store } from "@sambego/storybook-state";

const store = new Store({ value: "" })

storiesOf("TextInput", module)

    .add("type:text", () => {
        store.set({ value: "" })
        return (
            <State store={store}>
                <TextInput value={store.get("value")} onChange={e => store.set({ value: e.target.value })} className="custom-text-input" />
            </State>
        )
    })

    .add("type:email", () => {
        store.set({ value: "" })
        return (
            <State store={store}>
                <TextInput type="email" value={store.get("value")} onChange={e => store.set({ value: e.target.value })} />
            </State>
        )
    })

    .add("type:password", () => {
        store.set({ value: "" })
        return (
            <State store={store}>
                <TextInput type="password" value={store.get("value")} onChange={e => store.set({ value: e.target.value })} />
            </State>
        )
    })

    .add("type:number", () => {
        store.set({ value: "" })
        return (
            <State store={store}>
                <TextInput type="number" value={store.get("value")} onChange={e => store.set({ value: e.target.value })} />
            </State>
        )
    })

    .add("type:tel", () => {
        store.set({ value: "" })
        return (
            <State store={store}>
                <TextInput type="tel" value={store.get("value")} onChange={e => store.set({ value: e.target.value })} />
            </State>
        )
    })

    .add("with label", () => {
        store.set({ value: "" })
        return (
            <State store={store}>
                <TextInput label="fill this in!" value={store.get("value")} onChange={e => store.set({ value: e.target.value })} />
            </State>
        )
    })