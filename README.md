[![Build Status](https://travis-ci.org/Legantium/facaade.svg?branch=master)](https://travis-ci.org/Legantium/facaade)

# FACAADE #
A style agnostic react component library

## Getting started ##

__install package__
run ``npm install -S facaade``

__import the facaade components into your project and start using them!__
```jsx
import { Component } from 'react'
import { Button } from 'facaade'

class App extends Component {

    render() {
        return (
            <Button
                id="button-1"
                className="my-custom-button-class"
                onClick={()=>console.log("hello world")}
            >
                Say hello
            </Button>
        )
    }
}
```