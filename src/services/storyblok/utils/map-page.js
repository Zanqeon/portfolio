import mapDynamicComponents from 'services/storyblok/utils/map-dynamic-components'
import mapImage from 'services/storyblok/utils/map-image'

export default function mapPage (data) {

  return {
    id: data.content._uid,
    type: data.content.component,
    dynamicComponents: mapDynamicComponents(data.content),
    meta: {
      title: data?.content?.metaTitle,
      description: data?.content?.metaDescription,
      image: mapImage(data?.content?.socialImage),
      pageType: data?.content?.component
    }
  }
}
