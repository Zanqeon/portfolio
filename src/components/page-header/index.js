import React, { useEffect } from 'react'
import styles from './index.module.scss'
import RichText from 'components/rich-text'
import Layout from 'components/layout'
import useWindowDimensions from 'src/utils/hooks/use-window-dimension.ts'

export default function PageHeader ({
  image,
  title,
  role,
  year,
  link,
  description
}) {

  const { height, width } = useWindowDimensions()

  const imageService = ' https://img2.storyblok.com/'
  const newPath = image?.src?.replace('https://a.storyblok.com/', '')
  const dimensions = `${width ? Math.ceil(width * 1.5) : 2000}x${height ? Math.ceil(height * 1.5) : 0}/`
  const transformedSrc = imageService + dimensions + (image?.focusPoint ? `filters:focal(${image?.focusPoint})/` : '') + newPath

  return (
    <div className={styles.container}>
      {image && (
        <div className={styles.imageContainer}>
          <h1 className={styles.photoTitle}>{title}</h1>
          <img className={styles.image} src={transformedSrc} />
        </div>
      )}
      <Layout.Container>
        <Layout.Row>
          <Layout.Column columns="xs:12 sm:4">
            <div className={styles.year}>{year}</div>
            <div className={styles.role}>{role}</div>
          </Layout.Column>
        </Layout.Row>
        <Layout.Row>
          <Layout.Column columns="xs:12 sm:4">
            <h2 className={styles.title}>{title}</h2>
            <a href={link.href} className={styles.link} target="_blank">{link.label}</a>
          </Layout.Column>
          <Layout.Column columns="xs:12 sm:6" offset="sm:1">
            <div className={styles.description}>
              <RichText content={description} />
            </div>
          </Layout.Column>
        </Layout.Row>
      </Layout.Container>
    </div>
  )
}
