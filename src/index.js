export { default as Button } from './components/Button'
export { default as Block } from './components/Block'
export { default as TextInput } from './components/TextInput'
export { default as Textarea } from './components/Textarea'

// Block
    // children
    // className
    // id
    // style

    // basis
    // align
    // justify
    // grow
    // shrink
    // row
    // column
    // roWReverse
    // column-reverse
    // margin
    // padding

    // xsBasis
    // xsAlign
    // xsJustify
    // xsGrow
    // xsShrink
    // xsRow
    // xsColumn
    // xsRowReverse
    // xsColumnReverse
    // xsMargin
    // xsPadding

    // smBasis
    // smAlign
    // smJustify
    // smGrow
    // smShrink
    // smRow
    // smColumn
    // smRowReverse
    // smColumnReverse
    // smMargin
    // smPadding

    // mdBasis
    // mdAlign
    // mdJustify
    // mdGrow
    // mdShrink
    // mdRow
    // mdColumn
    // mdRowReverse
    // mdColumnReverse
    // mdMargin
    // mdPadding

    // lgBasis
    // lgAlign
    // lgJustify
    // lgGrow
    // lgShrink
    // lgRow
    // lgColumn
    // lgRowReverse
    // lgColumnReverse
    // lgMargin
    // lgPadding

    // xlBasis
    // xlAlign
    // xlJustify
    // xlGrow
    // xlShrink
    // xlRow
    // xlColumn
    // xlRowReverse
    // xlColumnReverse
    // xlMargin
    // xlPadding

    // xxlBasis
    // xxlAlign
    // xxlJustify
    // xxlGrow
    // xxlShrink
    // xxlRow
    // xxlColumn
    // xxlRowReverse
    // xxlColumnReverse
    // xxlMargin
    // xxlPadding




// TextArea
    // size : number - (16px)
    // value: string
    // placeholder: string
    // optional: boolean - (true)
    // onFocus: func
    // onChange: func
    // onBlur: func
    // onKeyPress: func
    // onKeyDown: func
    // onKeyUp: func
    // onMouseEnter: func
    // onMouseOver: func
    // onMouseLeave: func
    // onClick: func
    // minLength: number
    // maxLength: number
    // id: string
    // name: string
    // disabled: boolean - (false)
    // autoGrow: boolean - (true)
    // style: css object
    // className: string
    // flat: boolean - (false)

// Card
    // id
    // style: css object
    // className: string
    // flat: boolean (false)

// Chip
    // id
    // icon: Icon component
    // style: css object
    // className: string
    // flat: boolean (false)
    // muted: boolean (false)
    // outline: boolean (false)
    // onFocus: func
    // onActive: func
    // onBlur: func
    // onKeyPress: func
    // onMouseEnter: func
    // onMouseLeave: func
    // onHover: func    
    // onClick: func

// Toolbar
    // id
    // direction - enum: "row" | "row-reverse" | "column" | "column-reverse"
    // justify - enum "start" | "end" | "center" | "space-around" | "space-between"
    // align - enum "top" | "center" | "bottom" | "stretch" - ("stretch")
    // className
    // style

// Button
    // id
    // style: css object
    // className: string
    // flat: boolean (false)
    // muted: boolean (false)
    // outline: boolean (false)
    // onClick: func
    // onFocus
    // onBlur
    // onMouseEnter
    // onMouseLeave
    // compact: boolean (false)
    // padded: boolean (false)
    // size: number (16px)

// Form
    // id: string
    // onSubmit: func
    // className: string
    // style: css object

// ActionLink
    // id: string
    // style: css object
    // className: string
    // muted: boolean
    // onFocus: func
    // onActive: func
    // onBlur: func
    // onKeyPress: func
    // onMouseEnter: func
    // onMouseLeave: func
    // onHover: func    
    // onClick: func

// Popover
    // id
    // children - trigger element
    // content
    // position - enum: "top" | "top-right" | "right" | "bottom-right" | "bottom" | "bottom-left" | "left" | "top-left"
    // visible - bool (false)

// Dropdown
    // id
    // children - trigger element
    // content
    // position - enum: "top" | "top-right" | "right" | "bottom-right" | "bottom" | "bottom-left" | "left" | "top-left"
    // visible - bool (false)

// Icon
    // id
    // src - string (overrides name)
    // name - string
    // muted
    // outline
    // size - number
    // className
    // style

// List
    // id
    // type - enum "ordered" | "unordered"
    // direction - enum: "row" | "row-reverse" | "column" | "column-reverse"
    // justify - enum "start" | "end" | "center" | "space-around" | "space-between"
    // align - enum "top" | "center" | "bottom" | "stretch" - ("stretch")
    // className
    // style

// Expander (render prop)
    // open: passed func
    // close: passed func
    // isOpen: boolean (false)
    // className
    // style

// Text
    // id
    // subtle: boolean (false)
    // size: number (16px)
    // className
    // style

// Paragraph
    // id

// Avatar
    // src
    // size
    // className
    // style
    // id

// Seperator
    // vertical: boolean (true)
    // horizontal: boolean (false)
    // className
    // style
    // id

// Tooltip
    // position - enum: "top" | "top-right" | "right" | "bottom-right" | "bottom" | "bottom-left" | "left" | "top-left"
    // visible - bool (false)
    // content - node
    // target - node

// Image
    // src
    // className
    // style
    // id
    // alt

// Rating (composes Icon)
    // className
    // style
    // id
    // score - float [0 - 5]

// Carousel
    // itemsToShow - number
    // itemsToScroll - number
    // navigation - enum: "dots" | "thumbnails"
    // navigationPlacement - enum: "top" | right" | "bottom" | "left"
    // delay - number
    // speed - number
    // loop - boolean
    // transition - enum "fade" | "slide"
    // activeItem - position index number
    // paused - boolean (false)

// Accordian
    // target - node    
    // content - node
    // isOpen - boolean
    // open - func
    // close - func
    // toggle - func    

// Countdown (render prop)
    // children
        // time left
        // seconds left
        // mins left
        // hours left
        // days left
        // weeks left
        // months left
        // years left

// Drawer
    // position
    // open - bool (false)
    // onOpen - func
    // onClose - func
    // visible - bool (false)

// RadioInput
    // name
    // id
    // className
    // style
    // onChange

// Checkbox
    // name
    // id
    // className
    // style
    // onChange

// RadioButton
    // name
    // id
    // className
    // style
    // onChange

// Tab.Label
// Tab.Content