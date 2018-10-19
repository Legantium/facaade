import React from 'react'
import { string, func, bool, node, oneOf, object, number } from 'prop-types'
import { getClassName } from '../../utils'

require('./Textarea.scss')

/**
 * @name Textarea
 * @desc div wrapping textarea
 * @example
 *      ->  <Textarea value="passedValue" onChange={e => passedValue = e.target.value} error="an error" />
 *      <-  <div class="Textarea">
 *              <textarea type="email" class="Textarea__native-input" value="passedValue" />
 *              <div class="Textarea__error">an error</div>
 *          </div>
 */

Textarea.propTypes = {
    disabled: bool,
    className: string,
    style: object,
    id: string,
    name: string,
    value: string,
    initialValue: string,
    placeholder: string,
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
    autoGrow: bool
}

function Textarea({
    autoFocus = null,
    className = null,
    style = {},
    id = null,
    name = null,
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
    error = null
}) {

    const classNamesArr = ["Textarea", className]

    return (
        <div className={getClassName(classNamesArr)}>
            <input
                autoFocus={autoFocus}
                id={id}
                className={getClassName(classNamesArr, "__native-input")}
                onClick={onClick}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onMouseIn={onMouseIn}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                onKeyPress={onKeyPress}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                disabled={disabled}
                value={value !== undefined ? value : initialValue || ""}
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

export default Textarea