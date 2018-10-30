import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import sinon from 'sinon'
import Textarea from './'

describe("<Textarea>", () => {

    it("render", () => {
        const spy = sinon.spy()
        const { container } = render(<Textarea onChange={spy} value="" />)
        const textarea = container.querySelector('textarea')
        expect(textarea).toBeInTheDocument()
    })

    it("can pass disabled prop", () => {
        const spy = sinon.spy()
        const { container } = render(<Textarea disabled Textarea onChange={spy} value="" />)
        const textarea = container.querySelector('textarea')
        expect(textarea).toBeDisabled()
    })

    it("runs onChange handler", () => {
        const spy = sinon.spy()
        const { container } = render(<Textarea onChange={spy} value="" />)
        const textarea = container.querySelector('textarea')
        fireEvent.change(textarea, { target: { value: 'New value' } })
        expect(spy.callCount).toBe(1)
    })

    it("doesn't run onChange handler when disabled", () => {
        const spy = sinon.spy()
        const { container } = render(<Textarea onChange={spy} disabled value="" />)
        const textarea = container.querySelector('textarea')
        fireEvent.change(textarea, { target: { value: 'New value' } })
        expect(spy.callCount).toBe(0)
    })

})