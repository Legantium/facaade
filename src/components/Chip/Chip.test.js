import React from 'react'
import { render, fireEvent, waitForElement, wait } from 'react-testing-library'
import sinon from 'sinon'
import Chip from '.'

describe("<Chip>", () => {

    // DEFAULT
    it("Renders", () => {
        const { container } = render(<Chip label="my chip" imageSrc="https://via.placeholder.com/150" />)
        expect(container.querySelector(".Chip")).toBeInTheDocument()
        expect(container.querySelector(".Chip__image")).toBeInTheDocument()
        expect(container.querySelector(".Chip__label")).toBeInTheDocument()
    })

    it("Error: Neither label or imageSrc provided", () => {
        expect(() => render(<Chip />)).toThrow()
    })

    it("Runs onClick handler ", () => {
        const spy = sinon.spy()
        const { container } = render(<Chip onClick={spy} label="my chip" />)
        const chip = container.querySelector('.Chip')
        fireEvent.click(chip)
        expect(spy.callCount).toBe(1)
    })

    it("Runs onClick handler ", () => {
        const onClickSpy = sinon.spy()
        const onRemoveSpy = sinon.spy()
        const { container } = render(<Chip onClick={onClickSpy} label="my chip" onRemove={onRemoveSpy} />)
        const chipRemoveButton = container.querySelector('.Chip__remove-button')
        fireEvent.click(chipRemoveButton)
        expect(onRemoveSpy.callCount).toBe(1)
        expect(onClickSpy.callCount).toBe(0)
    })

})