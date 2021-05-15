import React from 'react'
import styles from './index.module.scss'

export default function Section ({
  children
}) {
  return (
    <section className={styles.container}>
      {children}
    </section>
  )
}
