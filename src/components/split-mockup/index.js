import React from 'react'
import SbEditable from 'storyblok-react'
import styles from './index.module.scss'
import Layout from 'components/layout'
import Section from 'components/section'

export default function SplitMockup ({
  backgroundColor,
  smallImage,
  largeImage
}) {
  return (
    <SbEditable content={{ backgroundColor, smallImage, largeImage }}>
      <Section>
        <Layout.Container>
          <ul className={styles.list}>
            <li className={styles.smallImageItem}>
              <div className={styles.smallImageContainer} style={{ backgroundColor: backgroundColor }}>
                <img src={smallImage.src} alt={smallImage.alt} className={styles.smallImage}/>
              </div>
            </li>
            <li className={styles.largeImageItem} style={{ backgroundColor: backgroundColor }}>
              <img src={largeImage.src} alt={largeImage.alt} className={styles.largeImage}/>
            </li>
          </ul>
        </Layout.Container>
      </Section>
    </SbEditable>
  )
}
