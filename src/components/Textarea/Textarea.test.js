import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Textarea from '.'

describe("<Textarea>", () => {

    it("render ", () => {
        const c = shallow(<Textarea value="value" onChange={(e) => { }} />)
        expect(c.find("textarea")).toBeTruthy()
        expect(c).toMatchSnapshot()
    })

    it("className", () => {
        const c = shallow(<Textarea value="value" className="custom-class" onChange={(e) => { }} />)
        expect(c.find(".custom-class")).toBeTruthy()
    })

    it("onChange", () => {
        const onChange = sinon.spy()
        const c = shallow(<Textarea value="value" className="custom-class" onChange={onChange} />)
        c.simulate("change")
        expect(onChange.callCount).toBe(1)
    })

    it("disabled has is-disabled className", () => {
        const c = shallow(<Textarea disabled value="value">Button</Textarea>)
        expect(c.find(".is-disabled")).toBeTruthy()
    })

    it("id", () => {
        const c = shallow(<Textarea value="value" id="custom-id" onChange={(e) => { }} />)
        expect(c.find("#custom-id")).toBeTruthy()
    })

    it("error: no value passed", () => {
        expect(() => { render(<Textarea id="custom-id" onChange={(e) => { }} />) }).toThrow()
    })

    it("error: no change handler passed", () => {
        expect(() => { render(<Textarea id="custom-id" value="value" />) }).toThrow()
    })



})