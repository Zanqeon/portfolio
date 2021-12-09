import React from 'react'
import SbEditable from 'storyblok-react'
import styles from './index.module.scss'
import Layout from 'components/layout'
import Section from 'components/section'
import classNames from 'classnames'

export default function SplitMockup ({
  backgroundColor,
  smallImage,
  largeImage,
  largeImageType
}) {
  return (
    <SbEditable content={{ backgroundColor, smallImage, largeImage }}>
      <Section>
        <Layout.Container>
            {largeImageType === 'mobile' && (
              <ul className={styles.list}>
                {smallImage && (
                  <li className={styles.smallImageItem}>
                    <div className={styles.smallImageContainer} style={{ backgroundColor: backgroundColor }}>
                      <img src={smallImage?.src} alt={smallImage.alt} className={styles.smallImage}/>
                    </div>
                  </li>
                )}
                {largeImage && (
                  <li className={styles.largeImageItem} style={{ backgroundColor: backgroundColor }}>
                    <img src={largeImage?.src} alt={largeImage.alt} className={styles.largeImage}/>
                  </li>
                )}
              </ul>
            )}
            {largeImageType === 'desktop' && (
              <>
                <ul className={styles.mobileItem} style={{ backgroundColor: backgroundColor }}>
                  {smallImage && (
                    <li className={styles.mobileItemImageWrapper}>
                      <img src={smallImage?.src} alt={smallImage.alt} className={styles.smallImage}/>
                    </li>
                  )}
                  {largeImage && (
                    <li className={styles.mobileItemRightImage}>
                      <img src={largeImage?.src} alt={largeImage.alt} className={styles.smallImage} />
                    </li>
                  )}
                </ul>
                <ul className={styles.desktopItem}>
                  {smallImage && (
                    <li className={styles.smallImageItem}>
                      <div className={styles.smallImageContainer} style={{ backgroundColor: backgroundColor }}>
                        <img src={smallImage?.src} alt={smallImage.alt} className={styles.smallImage}/>
                      </div>
                    </li>
                  )}
                  {largeImage && (
                    <li className={classNames(styles.largeImageItem, styles.desktopImageWrapper)} style={{ backgroundColor: backgroundColor }}>
                      <img src={largeImage?.src} alt={largeImage.alt} className={styles.largeImage}/>
                    </li>
                  )}
                </ul>
              </>
            )}
        </Layout.Container>
      </Section>
    </SbEditable>
  )
}
