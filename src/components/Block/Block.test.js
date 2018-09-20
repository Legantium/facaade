import React from 'react'
import { shallow } from 'enzyme'
import Block from '.'

describe("<Block>", () => {

    it("render", () => {
        const c = shallow(<Block>Content</Block>)
        expect(c.exists("div")).toBeTruthy()
        expect(c.text()).toEqual("Content")
    })

    it("render as <section>", () => {
        const c = shallow(<Block as="section">Content</Block>)
        expect(c.exists("section")).toBeTruthy()
    })

    it("className", () => {
        const c = shallow(<Block className="custom-class">DivLabel</Block>)
        expect(c.exists(".custom-class")).toBeTruthy()
    })

    it("id", () => {
        const c = shallow(<Block id="id">DivLabel</Block>)
        expect(c.exists("#id")).toBeTruthy()
    })

})