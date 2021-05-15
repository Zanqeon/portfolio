import PageView from 'views/pages/home'
import Head from 'components/head'
import Storyblok, { useStoryblok } from "services/storyblok"
import mapPage from "services/storyblok/utils/map-page"

export default function Index(props) {
  const story = useStoryblok(props.story)
  const content = mapPage(story)


  return (
    <div>
      <Head {...content.meta} />
      <PageView content={content} />
    </div>
  )
}

export async function getStaticProps(context) {
  // we need to join the slug on catch all routes
  const slug = context.params.slug ? context.params.slug.join('/') : 'home'
  let params = {
    version: "draft", // or 'published'
  }

  if (context.preview) {
    params.version = "draft"
    params.cv = Date.now()
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params)

  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  // get all stories inside the pages folder
  let { data } = await Storyblok.get('cdn/links/')

  let paths = []
  Object.keys(data.links).forEach(linkKey => {
    // don't generate route for folders or home entry
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
      return
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug.split("/")

    // generate page for the slug
    paths.push({ params: { slug } })
  })

  return {
    paths: paths,
    fallback: "blocking"
  }
}
