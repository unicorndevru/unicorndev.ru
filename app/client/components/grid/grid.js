import React from 'react'
import R from 'ramda'

function camelToDash(string){
  return string.replace(/([A-Z])/g, function(substr, match){
    return '-' + match.toLowerCase()
  })
}

function combineValueAndAttr(attrValue, attrName){
  return `${ camelToDash(attrName) }-${ attrValue }`
}

function layoutAlign(value, attrName){
  let alignOptions = R.split(/\s+/, value)
  return `${ camelToDash(attrName) }-` + R.join('-', alignOptions)
}

const gridPropsRegexp = /^flex|^layout|^hide/

const propProcessors = {
  flex(value){
    if(!value || value === 'flex' || value === true){
      return 'flex'
    } else {
      return combineValueAndAttr(value, 'flex')
    }
  },
  layoutAlign(value){
    return layoutAlign(value, 'layoutAlign')
  },

  layoutAlignMd(value) {
    return layoutAlign(value, 'layoutAlignMd')
  },

  default(value, attrName){
    if(value && value !== attrName && value !== true){
      return combineValueAndAttr(value, attrName)
    } else {
      return camelToDash(attrName)
    }
  }
}

export default (props) => {

  let passingProps = {}

  let classes = R.map(function(attrName){
    if(attrName.match(gridPropsRegexp)){
      let processor = propProcessors[attrName] || propProcessors.default
      return processor(props[attrName], attrName)
    } else {
      passingProps[attrName] = props[attrName]
    }
  }, R.keys(props)).join(' ').concat(props.className)

  if(props.component){
    return (
      <props.component {...passingProps} className={ classes}>
        { props.children }
      </props.component>
    )
  } else {
    return (
      <div {...passingProps} className={ classes }>
        { props.children }
      </div>
    )
  }
}
