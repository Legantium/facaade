import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Button from './'

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
        const c = shallow(<Button className="custom-class">ButtonLabel</Button>)
        expect(c.exists(".custom-class")).toBeTruthy()
    })

    it("id", () => {
        const c = shallow(<Button id="id">ButtonLabel</Button>)
        expect(c.exists("#id")).toBeTruthy()
    })

})