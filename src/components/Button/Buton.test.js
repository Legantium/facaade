import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Button from './'

describe("<Button>", () => {

    it("render", () => {
        const c = shallow(<Button>Button</Button>)
        expect(c.find("button")).toBeTruthy()
    })

    it("onClick", () => {
        const onClick = sinon.spy()
        const c = shallow(<Button onClick={onClick}>Button</Button>)
        c.simulate("click")
        expect(onClick.callCount).toBe(1)
    })

    it("className", () => {
        const c = shallow(<Button className="custom-class">Button</Button>)
        expect(c.find(".custom-class")).toBeTruthy()
    })

    it("id", () => {
        const c = shallow(<Button id="button">Button</Button>)
        expect(c.find("#block")).toBeTruthy()
    })

})