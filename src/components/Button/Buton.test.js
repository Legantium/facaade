import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Button from './'

describe("<Button>", () => {

    it("render", () => {
        const c = shallow(<Button>Button</Button>)
        expect(c.find("button")).toBeTruthy()
        expect(c).toMatchSnapshot()
    })

    it("onClick", () => {
        const spy = sinon.spy()
        const c = shallow(<Button onClick={spy}>Button</Button>)
        c.simulate("click")
        expect(spy.callCount).toBe(1)
    })

    it("onClick doesn't call on disabled button", () => {
        const spy = sinon.spy()
        const c = shallow(<Button disabled onClick={spy}>Button</Button>)
        c.simulate("click")
        expect(spy.callCount).toBe(0)
    })

    it("className", () => {
        const c = shallow(<Button className="custom-class">Button</Button>)
        expect(c.find(".custom-class")).toBeTruthy()
    })

    it("disabled has is-disabled className", () => {
        const c = shallow(<Button disabled>Button</Button>)
        expect(c.find(".is-disabled")).toBeTruthy()
    })

    it("id", () => {
        const c = shallow(<Button id="button">Button</Button>)
        expect(c.find("#block")).toBeTruthy()
    })

})