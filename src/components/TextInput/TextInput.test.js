import React from 'react'
import { shallow, render } from 'enzyme'
import sinon from 'sinon'
import TextInput from '.'

describe("<TextInput>", () => {

    it("render ", () => {
        const c = shallow(<TextInput value="value" onChange={(e) => { }} />)
        expect(c.find("TextInput")).toBeTruthy()
        expect(c).toMatchSnapshot()
    })

    it("className", () => {
        const c = shallow(<TextInput value="value" className="custom-class" onChange={(e) => { }} />)
        expect(c.find(".custom-class")).toBeTruthy()
    })

    it("onChange", () => {
        const onChange = sinon.spy()
        const c = shallow(<TextInput value="value" className="custom-class" onChange={onChange} />)
        c.simulate("change")
        expect(onChange.callCount).toBe(1)
    })

    it("disabled has is-disabled className", () => {
        const c = shallow(<TextInput disabled value="value" />)
        expect(c.find(".is-disabled")).toBeTruthy()
    })

    it("id", () => {
        const c = shallow(<TextInput value="value" id="custom-id" onChange={(e) => { }} />)
        expect(c.find("#custom-id")).toBeTruthy()
    })

    it("error: no value passed", () => {
        expect(() => { render(<TextInput id="custom-id" onChange={(e) => { }} />) }).toThrow()
    })

    it("error: no change handler passed", () => {
        expect(() => { render(<TextInput id="custom-id" value="value" />) }).toThrow()
    })

})