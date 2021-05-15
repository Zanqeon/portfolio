import React from 'react'
import styles from './index.module.scss'
import RichText from 'components/rich-text'
import Layout from 'components/layout'
import Section from 'components/section'
import SbEditable from 'storyblok-react'

export default function Step ({
  description,
  stepNumber,
  title
}) {

  const doubleDigits = (number) => {
    return number < 10 ? '0' + number : number
  }

  return (
    <SbEditable content={{ description, stepNumber, title }}>
      <Layout.Container>
        <Section>
          <Layout.Row>
            <Layout.Column columns="sm:1">
              <div className={styles.stepNumber}>{doubleDigits(stepNumber)}</div>
            </Layout.Column>
            <Layout.Column columns="sm:3">
              <h2 className={styles.title}>{title}</h2>
            </Layout.Column>
            <Layout.Column columns="sm:6" offset="sm:1">
              <div className={styles.description}>
                <RichText content={description} />
              </div>
            </Layout.Column>
          </Layout.Row>
        </Section>
      </Layout.Container>
    </SbEditable>
      )
}
