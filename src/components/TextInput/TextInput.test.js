import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import sinon from 'sinon'
import TextInput from './'

describe("<TextInput>", () => {

    it("render", () => {
        const spy = sinon.spy()
        const { container } = render(<TextInput onChange={spy} value="" />)
        const textInput = container.querySelector('input')
        expect(textInput).toBeInTheDocument()
    })

    it("can pass disabled prop", () => {
        const spy = sinon.spy()
        const { container } = render(<TextInput disabled Textarea onChange={spy} value="" />)
        const textInput = container.querySelector('input')
        expect(textInput).toBeDisabled()
    })

    it("runs onChange handler", () => {
        const spy = sinon.spy()
        const { container } = render(<TextInput onChange={spy} value="" />)
        const textInput = container.querySelector('input')
        fireEvent.change(textInput, { target: { value: 'New value' } })
        expect(spy.callCount).toBe(1)
    })

    it("doesn't run onChange handler when disabled", () => {
        const spy = sinon.spy()
        const { container } = render(<TextInput onChange={spy} disabled value="" />)
        const textInput = container.querySelector('input')
        fireEvent.change(textInput, { target: { value: 'New value' } })
        expect(spy.callCount).toBe(0)
    })

})