import React from 'react'
import SbEditable from 'storyblok-react'
import styles from './index.module.scss'
import Layout from 'components/layout'
import Section from 'components/section'

export default function DesktopMockup ({
  backgroundColor,
  images
}) {
  return (
    <SbEditable content={{ backgroundColor, images }}>
      <Section>
        <Layout.Container>
            <Layout.Row>
              <Layout.Column columns="sm:12" offset="sm:0">
                <div className={styles.container} style={{ backgroundColor: backgroundColor }}>
                  <Layout.Row>
                    <Layout.Column columns="sm:10" offset="sm:1">
                      <ul className={styles.list}>
                        {images.map(image => {
                          return (
                            <li className={styles.item} key={image.id}>
                              <img src={image.filename} alt={image.alt} className={styles.image}/>
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
