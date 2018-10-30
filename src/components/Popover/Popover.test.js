import React from 'react'
import { render, fireEvent, waitForElement, wait } from 'react-testing-library'
import Popover from '.'

describe("<Popover>", () => {

    // DEFAULT
    it("Renders Popover", () => {
        const { container } = render(
            <Popover overlay={<div id="Popover-message" />}>
                <div>My Popover</div>
            </Popover>
        )
        expect(container.querySelector(".Popover")).toBeInTheDocument()
    })

    it("Doesn't render overlay initially", () => {
        const { container } = render(
            <Popover overlay={<div id="Popover-message" />}>
                <div>My Popover</div>
            </Popover>
        )
        expect(container.querySelector("#Popover-message")).not.toBeInTheDocument()
    })

    // HOVER

    it("Hover: Shows overlay on hover", async () => {
        const { container } = render(
            <Popover overlay={<div id="Popover-message" />}>
                <div>My Popover</div>
            </Popover>
        )

        const trigger = container.querySelector('.Popover__trigger')
        fireEvent.mouseEnter(trigger)
        const overlay = await waitForElement(() => container.querySelector('.Popover__overlay'))
        expect(overlay).toBeInTheDocument()
        fireEvent.blur(container.querySelector('.Popover'))
        await wait(() => expect(container.querySelector('.Popover__overlay')).not.toBeInTheDocument())
    })

    // CLICK

    it("Click: Toggles overlay on click", async () => {
        const { container } = render(
            <Popover click overlay={<div id="Popover-message" />}>
                <div>My Popover</div>
            </Popover>
        )

        const trigger = container.querySelector('.Popover__trigger')
        fireEvent.click(trigger)
        const overlay = await waitForElement(() => container.querySelector('.Popover__overlay'))
        expect(overlay).toBeInTheDocument()
        fireEvent.click(trigger)
        await wait(() => expect(container.querySelector('.Popover__overlay')).not.toBeInTheDocument())
    })

    it("Click: Hides overlay when blurring Popover", async () => {
        const { container } = render(
            <Popover click overlay={<div id="Popover-message" />}>
                <div>My Popover</div>
            </Popover>
        )

        const trigger = container.querySelector('.Popover__trigger')
        fireEvent.click(trigger)
        const overlay = await waitForElement(() => container.querySelector('.Popover__overlay'))
        expect(overlay).toBeInTheDocument()
        fireEvent.blur(container.querySelector('.Popover'))
        await wait(() => expect(container.querySelector('.Popover__overlay')).not.toBeInTheDocument())
    })

    it("Click: Overlay doesn't show on hover", async () => {
        const { container } = render(
            <Popover click overlay={<div id="Popover-message" />}>
                <div>My Popover</div>
            </Popover>
        )

        const trigger = container.querySelector('.Popover__trigger')
        fireEvent.mouseEnter(trigger)
        await wait(() => expect(container.querySelector('.Popover__overlay')).not.toBeInTheDocument())
    })

    // CONTEXT

    it("Context: Shows overlay on right click", async () => {
        const { container } = render(
            <Popover context overlay={<div id="Popover-message" />}>
                <div>My Popover</div>
            </Popover>
        )

        const trigger = container.querySelector('.Popover__trigger')
        fireEvent.contextMenu(trigger, true)
        const overlay = await waitForElement(() => container.querySelector('.Popover__overlay'))
        expect(overlay).toBeInTheDocument()
    })

    it("Context: Hides overlay on blur", async () => {
        const { container } = render(
            <Popover context overlay={<div id="Popover-message" />}>
                <div>My Popover</div>
            </Popover>
        )

        const trigger = container.querySelector('.Popover__trigger')
        fireEvent.contextMenu(trigger, true)
        const overlay = await waitForElement(() => container.querySelector('.Popover__overlay'))
        expect(overlay).toBeInTheDocument()
        fireEvent.blur(container.querySelector('.Popover'))
        await wait(() => expect(container.querySelector('.Popover__overlay')).not.toBeInTheDocument())
    })

    it("Context: Overlay doesn't show on hover", async () => {
        const { container } = render(
            <Popover context overlay={<div id="Popover-message" />}>
                <div>My Popover</div>
            </Popover>
        )

        const trigger = container.querySelector('.Popover__trigger')
        fireEvent.mouseEnter(trigger)
        await wait(() => expect(container.querySelector('.Popover__overlay')).not.toBeInTheDocument())
    })

    // CONTROLLED

    it("Controlled: renders overlay when isOpen is true", () => {
        const { container } = render(
            <Popover overlay={<div id="Popover-message" />} isOpen>
                <div>My Popover</div>
            </Popover>
        )
        const overlay = container.querySelector(".Popover__overlay")
        expect(overlay).toBeInTheDocument()
    })

    it("Controlled: doesn't render overlay when isOpen is false", () => {
        const { container } = render(
            <Popover overlay={<div id="Popover-message" />} isOpen={false}>
                <div>My Popover</div>
            </Popover>
        )
        const overlay = container.querySelector(".Popover__overlay")
        expect(overlay).not.toBeInTheDocument()
    })

})