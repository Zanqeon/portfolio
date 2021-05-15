import React from 'react'
import SbEditable from 'storyblok-react'
import DynamicComponentsSection from 'sections/dynamic-components'

export default function PageView ({ content }) {

  if (!content) return null

  return (
    <SbEditable content={content}>
      <main>
        <DynamicComponentsSection dynamicComponents={content?.dynamicComponents} />
      </main>
    </SbEditable>
  )
}

