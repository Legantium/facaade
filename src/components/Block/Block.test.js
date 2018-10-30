import React from 'react'
import { render, waitForElement, wait } from 'react-testing-library'
import Block from '.'

describe("<Block>", () => {

    it("render as default <div>", () => {
        const { container } = render(<Block>Block</Block>)
        const block = container.querySelector('div')
        expect(block).toBeInTheDocument()
    })

    it("render as <section>", () => {
        const { container } = render(<Block as="section">Block</Block>)
        const section = container.querySelector("section")
        expect(section).toBeInTheDocument()
    })

    it("can pass className", () => {
        const { container } = render(<Block className="custom-class">Block</Block>)
        const block = container.querySelector(".custom-class")
        expect(block).toBeInTheDocument()
    })

    it("can pass id", () => {
        const { container } = render(<Block id="my-block">Block</Block>)
        const block = container.querySelector("#my-block")
        expect(block).toBeInTheDocument()
    })

})