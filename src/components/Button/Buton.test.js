import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import sinon from 'sinon'
import Button from './'

describe("<Button>", () => {

    it("render", () => {
        const spy = sinon.spy()
        const { container } = render(<Button onClick={spy}>Button</Button>)
        const button = container.querySelector('button')
        expect(button).toBeInTheDocument()
    })

    it("can pass disabled prop", () => {
        const spy = sinon.spy()
        const { container } = render(<Button disabled onClick={spy}>Button</Button>)
        const button = container.querySelector('button')
        expect(button).toBeDisabled()
    })

    it("runs onClick handler ", () => {
        const spy = sinon.spy()
        const { container } = render(<Button onClick={spy}>Button</Button>)
        const button = container.querySelector('button')
        fireEvent.click(button)
        expect(spy.callCount).toBe(1)
    })

    it("doesn't run onClick handler when disabled ", () => {
        const spy = sinon.spy()
        const { container } = render(<Button disabled onClick={spy}>Button</Button>)
        const button = container.querySelector('button')
        fireEvent.click(button)
        expect(spy.callCount).toBe(0)
    })
})