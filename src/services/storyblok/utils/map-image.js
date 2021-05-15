export default function mapImage (data) {
  if(!data?.id) return null

  const getAspectRatio = (data) => {
    const pixels = data.split('/')[5]
    const height = pixels.split('x')[0]
    const width = pixels.split('x')[1]

    return `${width}/${height}`
  }

  return {
    src: data.filename,
    alt: data.alt,
    copyright: data.copyright,
    caption: data.title,
    focusPoint: data.focus,
    id: data.id,
    aspectRatio: getAspectRatio(data.filename)
  }
}
