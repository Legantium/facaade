import React from 'react'
import { render, fireEvent, waitForElement, wait } from 'react-testing-library'
import Tooltip from '.'

describe("<Tooltip>", () => {

    // DEFAULT
    it("Renders Tooltip", () => {
        const { container } = render(
            <Tooltip overlay={<div id="tooltip-message" />}>
                <div>My tooltip</div>
            </Tooltip>
        )
        expect(container.querySelector(".Tooltip")).toBeInTheDocument()
    })

    it("Doesn't render overlay initially", () => {
        const { container } = render(
            <Tooltip overlay={<div id="tooltip-message" />}>
                <div>My tooltip</div>
            </Tooltip>
        )
        expect(container.querySelector("#tooltip-message")).not.toBeInTheDocument()
    })

    // HOVER

    it("Hover: Shows overlay on hover", async () => {
        const { container } = render(
            <Tooltip overlay={<div id="tooltip-message" />}>
                <div>My tooltip</div>
            </Tooltip>
        )

        const trigger = container.querySelector('.Tooltip__trigger')
        fireEvent.mouseEnter(trigger)
        const overlay = await waitForElement(() => container.querySelector('.Tooltip__overlay'))
        expect(overlay).toBeInTheDocument()
        fireEvent.blur(container.querySelector('.Tooltip'))
        await wait(() => expect(container.querySelector('.Tooltip__overlay')).not.toBeInTheDocument())
    })

    // CLICK

    it("Click: Toggles overlay on click", async () => {
        const { container } = render(
            <Tooltip click overlay={<div id="tooltip-message" />}>
                <div>My tooltip</div>
            </Tooltip>
        )

        const trigger = container.querySelector('.Tooltip__trigger')
        fireEvent.click(trigger)
        const overlay = await waitForElement(() => container.querySelector('.Tooltip__overlay'))
        expect(overlay).toBeInTheDocument()
        fireEvent.click(trigger)
        await wait(() => expect(container.querySelector('.Tooltip__overlay')).not.toBeInTheDocument())
    })

    it("Click: Hides overlay when blurring Tooltip", async () => {
        const { container } = render(
            <Tooltip click overlay={<div id="tooltip-message" />}>
                <div>My tooltip</div>
            </Tooltip>
        )

        const trigger = container.querySelector('.Tooltip__trigger')
        fireEvent.click(trigger)
        const overlay = await waitForElement(() => container.querySelector('.Tooltip__overlay'))
        expect(overlay).toBeInTheDocument()
        fireEvent.blur(container.querySelector('.Tooltip'))
        await wait(() => expect(container.querySelector('.Tooltip__overlay')).not.toBeInTheDocument())
    })

    it("Click: Overlay doesn't show on hover", async () => {
        const { container } = render(
            <Tooltip click overlay={<div id="tooltip-message" />}>
                <div>My tooltip</div>
            </Tooltip>
        )

        const trigger = container.querySelector('.Tooltip__trigger')
        fireEvent.mouseEnter(trigger)
        await wait(() => expect(container.querySelector('.Tooltip__overlay')).not.toBeInTheDocument())
    })

    // CONTEXT

    it("Context: Shows overlay on right click", async () => {
        const { container } = render(
            <Tooltip context overlay={<div id="tooltip-message" />}>
                <div>My tooltip</div>
            </Tooltip>
        )

        const trigger = container.querySelector('.Tooltip__trigger')
        fireEvent.contextMenu(trigger, true)
        const overlay = await waitForElement(() => container.querySelector('.Tooltip__overlay'))
        expect(overlay).toBeInTheDocument()
    })

    it("Context: Hides overlay on blur", async () => {
        const { container } = render(
            <Tooltip context overlay={<div id="tooltip-message" />}>
                <div>My tooltip</div>
            </Tooltip>
        )

        const trigger = container.querySelector('.Tooltip__trigger')
        fireEvent.contextMenu(trigger, true)
        const overlay = await waitForElement(() => container.querySelector('.Tooltip__overlay'))
        expect(overlay).toBeInTheDocument()
        fireEvent.blur(container.querySelector('.Tooltip'))
        await wait(() => expect(container.querySelector('.Tooltip__overlay')).not.toBeInTheDocument())
    })

    it("Context: Overlay doesn't show on hover", async () => {
        const { container } = render(
            <Tooltip context overlay={<div id="tooltip-message" />}>
                <div>My tooltip</div>
            </Tooltip>
        )

        const trigger = container.querySelector('.Tooltip__trigger')
        fireEvent.mouseEnter(trigger)
        await wait(() => expect(container.querySelector('.Tooltip__overlay')).not.toBeInTheDocument())
    })

    // CONTROLLED

    it("Controlled: renders overlay when isOpen is true", () => {
        const { container } = render(
            <Tooltip overlay={<div id="tooltip-message" />} isOpen>
                <div>My tooltip</div>
            </Tooltip>
        )
        const overlay = container.querySelector(".Tooltip__overlay")
        expect(overlay).toBeInTheDocument()
    })

    it("Controlled: doesn't render overlay when isOpen is false", () => {
        const { container } = render(
            <Tooltip overlay={<div id="tooltip-message" />} isOpen={false}>
                <div>My tooltip</div>
            </Tooltip>
        )
        const overlay = container.querySelector(".Tooltip__overlay")
        expect(overlay).not.toBeInTheDocument()
    })

})