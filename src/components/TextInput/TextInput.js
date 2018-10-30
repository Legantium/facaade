import { string, func, bool, node, oneOf, object, number } from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { getClassName } from '../../utils'

/**
 * @name Button
 * @desc button element
 * @example
 *      ->  <TextInput type="email" value="passedValue" onChange={e => passedValue = e.target.value} error="an error" label="fill it in"/>
 *      <-  <div class="TextInput">
 *              <label class="TextInput__labbel">fill it in</label>
 *              <input type="email" class="TextInput__native-input" value="passedValue" />
 *              <div class="TextInput__error">an error</div>
 *          </div>
 */

TextInput.propTypes = {
    disabled: bool,
    className: string,
    style: object,
    id: string,
    name: string,
    label: string,
    inlineLabel: string,
    type: oneOf(["text", "number", "tel", "email", "password"]),
    value: string,
    initialValue: string,
    placeholder: string,
    children: node,
    onClick: func,
    onFocus: func,
    onBlur: func,
    onMouseIn: func,
    onMouseOut: func,
    onMouseOver: func,
    onKeyPress: func,
    onKeyDown: func,
    onKeyUp: func,
    optional: bool,
    disabled: bool,
    error: string,
    autoFocus: bool,
}

function TextInput({
    autoFocus = null,
    className = null,
    style = {},
    id = null,
    name = null,
    label = null,
    inlineLabel = null,
    disabled = false,
    value = null,
    initialValue = null,
    placeholder = null,
    type = "text",
    onClick = null,
    onChange = null,
    onFocus = null,
    onBlur = null,
    onMouseIn = null,
    onMouseOut = null,
    onMouseOver = null,
    onKeyPress = null,
    onKeyDown = null,
    onKeyUp = null,
    optional = false,
    minLength = null,
    maxLength = null,
    error = null
}) {

    if (value === null) { throw new Error("No value passed to TextInput. Where no value is available, pass an empty string") }
    if (onChange === null) { throw new Error("No change handler passed to TextInput.") }

    const classNamesArr = ["TextInput", className]

    return (
        <div className={getClassName(classNamesArr)}>
            {(!!label || !!inlineLabel) && <label className={getClassName(classNamesArr, "__label")}>{(!!label && label) || (!!inlineLabel && inlineLabel)}</label>}
            <input
                autoFocus={autoFocus}
                id={id}
                className={getClassName(classNamesArr, "__native-input")}
                onClick={!disabled ? onClick : null}
                onChange={!disabled ? onChange : null}
                onFocus={!disabled ? onFocus : null}
                onBlur={!disabled ? onBlur : null}
                onMouseIn={!disabled ? onMouseIn : null}
                onMouseOver={!disabled ? onMouseOver : null}
                onMouseOut={!disabled ? onMouseOut : null}
                onKeyPress={!disabled ? onKeyPress : null}
                onKeyDown={!disabled ? onKeyDown : null}
                onKeyUp={!disabled ? onKeyUp : null}
                disabled={disabled}
                value={value}
                placeholder={placeholder}
                name={name || id}
                type={type}
                style={style}
                required={!optional}
            />
            {!!error && <div className={getClassName(classNamesArr, "__error")}>{error}</div>}
        </div>
    )
}

const styledTextInput = styled(TextInput)`
    
    label {
        ${({ label }) => !!label ? "display: block" : null}
    }
    
`

export default styledTextInput