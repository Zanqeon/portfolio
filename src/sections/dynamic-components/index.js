import React from 'react'
import Mockup from 'components/mockup'
import SplitMockup from 'components/split-mockup'
import Step from 'components/step'
import Placeholder from 'components/placeholder'
import PageHeader from 'components/page-header'

const Components = {
  'mockup': Mockup,
  'splitMockup': SplitMockup,
  'step': Step,
  'pageHeader': PageHeader,
}

function DynamicComponent ({ data }) {

  if (typeof Components[data?.component] !== 'undefined') {
    const Component = Components[data.component]
    return <Component {...data} />
  }
  return <Placeholder componentName={data?.component}/>
}

export default function DynamicComponentsSection ({ dynamicComponents }) {
  if (!dynamicComponents) return null

  return dynamicComponents.map(dynamicComponent => (
    <DynamicComponent data={dynamicComponent} key={dynamicComponent.id}/>
  ))
}


