import React from 'react'
import { shallow } from 'enzyme'
import Block from '.'

describe("<Block>", () => {

    it("render as default <div>", () => {
        const c = shallow(<Block>Block</Block>)
        expect(c.find("div")).toBeTruthy()
    })

    it("render as <section>", () => {
        const c = shallow(<Block as="section">Block</Block>)
        expect(c.find("section")).toBeTruthy()
    })

    it("className", () => {
        const c = shallow(<Block className="custom-class">Block</Block>)
        expect(c.find(".custom-class")).toBeTruthy()
    })

    it("id", () => {
        const c = shallow(<Block id="block">Block</Block>)
        expect(c.find("#block")).toBeTruthy()
    })

})