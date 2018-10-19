export const getClassName = (classNameArr, suffix = null) => {

    classNameArr = classNameArr.filter(cn => !!cn)

    if (!!suffix) classNameArr = classNameArr.map(className => `${className}${suffix}`)

    return classNameArr.join(" ").trim()
}