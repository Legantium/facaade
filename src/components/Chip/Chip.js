import { string, func, bool, node, oneOf, object, number } from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { getClassName } from '../../utils'

/**
 * @name Chip
 * @desc a small contained piece of information
 * @class
 *      .Chip
 *      .Chip__image
 *      .Chip__label
 *      .Chip__remove-button
 * @example
 *      ->  <Chip
 *              label="chip label"
 *              imageSrc="/path/to/image"
 *              onRemove={doRemovalStuff}
 *          />
 *      <-  <div class="Chip">
 *              <img class="Chip__image" src="/path/to/image" />
 *              <div class="Chip__label">chip label</div>
 *              <a class="Chip__remove-button" />
 *          </div>
 */

Chip.propTypes = {
    className: string,
    imageSrc: string,
}

function Chip({
    className = null,
    id = null,
    imageSrc = null,
    label = null,
    onRemove = null,
    onClick = null,
}) {

    if (!imageSrc && !label) throw new Error("At least a label or imageSrc needs to be passed to Chip")

    const classNamesArr = ["Chip", className]

    return (
        <div className={getClassName(classNamesArr)} id={id} onClick={onClick}>
            {!!imageSrc && <img className={getClassName(classNamesArr, "__image")} src={imageSrc} />}
            {!!label && <span className={getClassName(classNamesArr, "__label")}>{label}</span>}
            {!!onRemove && <a className={getClassName(classNamesArr, "__remove-button")} onClick={e => { e.stopPropagation(); onRemove(id) }} />}
        </div>
    )
}

const StyledChip = styled(Chip)`
    
    
    display: inline-flex;
    align-items: center;
    user-select: none;
    ${({ onClick = null }) => !!onClick ? `cursor: pointer;` : ``})}

    .Chip__remove-button {
        height: 16px;
        width: 16px;
        font-size: 16px;
        display: inline-block;
        margin-left: .25em;
        background: no-repeat center url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHZpZXdCb3g9IjAgMCA4IDgiPgogIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzc5ODc5OCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEzMTAuOTg0OTYsMjQ4LjkzNTQ4IEwxMzEwLjk4NDk2LDI0NSBMMTMxMC45ODQ5NiwyNDguOTM1NDggTDEzMDcsMjQ4LjkzNTQ4IEwxMzEwLjk4NDk2LDI0OC45MzU0OCBaIE0xMzEwLjk4NDk2LDI0OC45MzU0OCBMMTMxNSwyNDguOTM1NDggTDEzMTAuOTg0OTYsMjQ4LjkzNTQ4IEwxMzEwLjk4NDk2LDI1MyBMMTMxMC45ODQ5NiwyNDguOTM1NDggWiIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgOTUzLjI0MSAtMTQ1MS4xODkpIi8+Cjwvc3ZnPgo=');
        cursor: pointer;
        vertical-align: middle;
        background-size: 8px;
        background-position: 4px;
    }

    .Chip__label {
        display: inline-block;
        vertical-align: middle;
        line-height: 1.2;
    }
`

export default StyledChip