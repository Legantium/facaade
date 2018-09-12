import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Button from './Button'

describe("<Button>", () => {

    it("render", () => {
        const c = shallow(<Button>ButtonLabel</Button>)
        expect(c.exists("button")).toBeTruthy()
        expect(c.text()).toEqual("ButtonLabel")
    })

    it("render as <a>", () => {
        const c = shallow(<Button as="a">ButtonLabel</Button>)
        expect(c.exists("a")).toBeTruthy()
    })

    it("onClick", () => {
        const onClick = sinon.spy()
        const c = shallow(<Button onClick={onClick}>ButtonLabel</Button>)
        c.find("button").simulate("click")
        expect(onClick.callCount).toBe(1)
    })

    it("className", () => {
        const c = shallow(<Button className="my-custom-button">ButtonLabel</Button>)
        expect(c.exists("button.button.my-custom-button")).toBeTruthy()
    })

    it("id", () => {
        const c = shallow(<Button id="button-1">ButtonLabel</Button>)
        expect(c.exists("button#button-1")).toBeTruthy()
    })

})