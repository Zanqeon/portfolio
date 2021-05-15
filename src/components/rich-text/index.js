import React from 'react'
import styles from './index.module.scss'
import { render } from "storyblok-rich-text-react-renderer"

export default function RichText ({
  content
}) {

  return (
    <div className={styles.container}>
      {render(content)}
    </div>
  )
}
