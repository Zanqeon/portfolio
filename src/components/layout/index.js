import React, { useMemo } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

function useLayoutClass (src = '', prefix) {
  return useMemo(() => (
    src.split(' ').map(col => (
      prefix
        ? styles[`${prefix}-${col.split(':').join('-')}`]
        : styles[col.split(':').join('-')]
    ))
  ), [ src, prefix ])
}

export function Container ({
  children,
  className: givenClassName,
  elementType: ElementType
}) {
  const className = classNames(styles.container, givenClassName)

  return (
    <ElementType className={className}>{children}</ElementType>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  elementType: PropTypes.oneOf([
    'div',
    'section'
  ])
}

Container.defaultProps = {
  elementType: 'div'
}

export function Row ({
  children,
  className: givenClassName,
  isReversed,
  elementType: ElementType,
  ...props
}) {
  const className = classNames(styles.row, givenClassName, { [styles.rowReversed]: isReversed })
  return (
    <ElementType className={className} {...props}>
      {children}
    </ElementType>
  )
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isReversed: PropTypes.bool,
  elementType: PropTypes.oneOf([
    'div',
    'ul'
  ])
}

Row.defaultProps = {
  isReversed: false,
  elementType: 'div'
}

export function Column ({
  children,
  className: givenClassName,
  columns,
  offset,
  elementType: ElementType,
  ...props
}) {
  const columnStyle = useLayoutClass(columns)
  const offsetStyle = useLayoutClass(offset, 'offset')
  const className = classNames(styles.column, givenClassName, columnStyle, offsetStyle)

  return (
    <ElementType className={className} {...props}>
      {children}
    </ElementType>
  )
}

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  columns: PropTypes.string,
  offset: PropTypes.string,
  elementType: PropTypes.oneOf([
    'div',
    'li'
  ])
}

Column.defaultProps = {
  elementType: 'div'
}

export default {
  Container,
  Row,
  Column
}
