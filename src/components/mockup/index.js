import React from 'react'
import SbEditable from 'storyblok-react'
import styles from './index.module.scss'
import Layout from 'components/layout'
import Section from 'components/section'
import classNames from 'classnames'

export default function Mockup ({
  backgroundColor,
  images,
  type
}) {
  const containerClassName = classNames(styles.container, {
    [styles.phoneDoubleContainer]: type === 'phone' && images.length === 2,
    [styles.phoneTripleContainer]: type === 'phone' && images.length === 3,
    [styles.desktopContainer]: type === 'desktop'
  })


  return (
    <SbEditable content={{ backgroundColor, images, type }}>
      <Section>
        <Layout.Container>
            <Layout.Row>
              <Layout.Column columns="sm:12" offset="sm:0">
                <div className={containerClassName} style={{ backgroundColor: backgroundColor }}>
                  <Layout.Row>
                    <Layout.Column columns="sm:10" offset="sm:1">
                      <ul className={styles.list}>
                        {images.map(image => {
                          return (
                            <li className={styles.item} key={image.id}>
                              <img src={image.src} alt={image.alt} className={styles.image}/>
                            </li>
                          )
                        })}
                      </ul>
                    </Layout.Column>
                  </Layout.Row>
                </div>
              </Layout.Column>
            </Layout.Row>
        </Layout.Container>
      </Section>
    </SbEditable>
  )
}
