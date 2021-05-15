import mapMockup from 'services/storyblok/utils/map-mockup'
import mapSplitMockup from 'services/storyblok/utils/map-split-mockup'
import mapStep from 'services/storyblok/utils/map-step'
import mapPageHeader from 'services/storyblok/utils/map-page-header'

function mapDynamicComponent (data, component) {
  const dynamicComponentsMap = {
    mockup: mapMockup,
    splitMockup: mapSplitMockup,
    step: mapStep,
    pageHeader: mapPageHeader,
    // richText: mapRichText
  }

  if (!dynamicComponentsMap[component]) return null

  return {
    ...dynamicComponentsMap[component](data),
    component,
    id: data._uid,
    _editable: data._editable
  }
}

export default function mapDynamicComponents (data) {
  if (data.body) {
    return data.body.map(dynamicComponent => mapDynamicComponent(dynamicComponent, dynamicComponent.component )).filter(Boolean)
  }
}
