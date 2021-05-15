import mapImage from 'services/storyblok/utils/map-image'

export default function mapMockup (data) {
  return {
    backgroundColor: data.backgroundColor,
    images: data.images.map(image => (mapImage(image))),
    type: data.type[0]
  }
}
