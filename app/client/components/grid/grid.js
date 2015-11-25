import React from 'react'
import R from 'ramda'

function camelToDash(string){
  return string.replace(/([A-Z])/g, function(substr, match){
    return '-' + match.toLowerCase()
  })
}

function combineValueAndAttr(attrName, attrValue){
  var value = attrValue
  if(R.is(String, value)){
    value = R.join('-', R.split(/\s+/, attrValue))
  }

  return `${ camelToDash(attrName) }-${ value }`
}

const gridPropsRegexp = /^flex|^layout|^hide/

const propProcessors = {
  flex(value){
    if(!value || value === 'flex' || value === true){
      return 'flex'
    } else {
      return combineValueAndAttr('flex', value)
    }
  },

  default(value, attrName){
    if(value && value !== attrName && value !== true){
      return combineValueAndAttr(attrName, value)
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
