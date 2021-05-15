import mapImage from 'services/storyblok/utils/map-image'

export default function mapSplitMockup (data) {
  return {
    backgroundColor: data.backgroundColor,
    smallImage:mapImage(data.smallImage),
    largeImage:mapImage(data.largeImage)
  }
}
