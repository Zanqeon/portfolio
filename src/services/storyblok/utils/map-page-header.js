import mapImage from 'services/storyblok/utils/map-image'

export default function mapPageHeader (data) {
  return {
   title: data.title,
    role: data.role,
    year: data.year,
    link: {
      href: data.website,
      label: data.websiteLabel
    },
    description: data.description,
    image: mapImage(data.image)
  }
}
