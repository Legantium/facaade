export const getClassName = (classNameArr, suffix = null, ...stateClasses) => {

    if (typeof classNameArr === "string") classNameArr = [classNameArr]

    classNameArr = classNameArr.filter(cn => !!cn)

    if (!!suffix) {
        classNameArr = classNameArr.map(className => `${className}${suffix}`)
    }

    stateClasses = stateClasses.filter(cn => !!cn)

    return [...classNameArr, ...stateClasses].join(" ").trim()
}