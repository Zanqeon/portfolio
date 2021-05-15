import React from 'react'
import NextHead from 'next/head'

export default function Head ({
  title,
  description,
  image,
  pageType
}) {

  const isCase = pageType === 'casePage'

  const schema = {
    '@context': 'https://schema.org/',
    '@type': 'WebPage',
    name: title,
    description: description
  }

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="Description" content={description} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description}
      />
      {image && (
        <meta property="og:image" content={image.src} />
      )}
      {isCase && (
        <meta property="og:type" content="article" />
      )}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </NextHead>
  )
}
