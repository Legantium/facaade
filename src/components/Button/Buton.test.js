import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe("<Button>", () => {

    it("render()", () => {
        const c = shallow(<Button>ButtonLabel</Button>)
        expect(c.exists("button")).toBeTruthy()
        expect(c.text()).toEqual("ButtonLabel")
    })

})