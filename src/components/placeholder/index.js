import React from 'react'
import styles from './index.module.scss'
import Layout from 'components/layout'

export default function Placeholder ({
  componentName
}) {
  return (
    <Layout.Container>
      <Layout.Row>
        <Layout.Column columns="sm:10" offset="sm:1">
          <div className={styles.container}>
            <p className={styles.description}>The component <strong>{componentName ? componentName : undefined}</strong> has not been created yet.</p>
          </div>
        </Layout.Column>
      </Layout.Row>
    </Layout.Container>
  )
}
