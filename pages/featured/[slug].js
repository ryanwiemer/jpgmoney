import { NextSeo } from 'next-seo'
import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import Stats from '../../components/Stats'
import Notable from '../../components/Notable'
import FeaturedLink from '../../components/FeaturedLink'
import Curtain from '../../components/Curtain'
import { getCollectionArtwork } from '../../lib/openSeaAPI'
import data from '../../lib/data'
import { motion } from 'framer-motion'

let easing = [0.175, 0.85, 0.42, 0.96]
const variants = {
  initial: {
    opacity: 0,
    y: 100,
    zIndex: 90,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.5,
      ease: easing,
    },
  },
}

function Page(props) {
  return (
    <>
      <NextSeo
        title={`${props.collection.name} Collection of NFTs`}
        description={`Explore ${props.collection.name} NFTs and the incredible amounts of cash spent to aquire them.`}
        openGraph={{
          images: [
            {
              url: props.collection.bannerImage.src,
              width: props.collection.bannerImage.width,
              height: props.collection.bannerImage.height,
            },
          ],
        }}
      />
      <Curtain />
      <Hero
        heading={props.collection.name}
        image={props.collection.bannerImage}
        placeholder={props.collection.bannerPlaceholder}
        description={props.collection.description}
      />
      <motion.div variants={variants} initial="initial" animate="enter">
        <Gallery artwork={props.artwork} />
        <Stats
          floor={props.collection.floor === 0 ? null : props.collection.floor}
          totalSales={props.collection.totalSales}
          totalVolume={props.collection.totalVolume}
          rate={props.collection.rate}
        />
        {props.notable && <Notable {...props.notable} />}
        <FeaturedLink />
      </motion.div>
    </>
  )
}

export async function getStaticPaths() {
  const pages = data
  const paths = pages.map(page => ({
    params: {
      slug: page.slug,
    },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const selected = data.find(data => data.slug === params.slug)
  const artworkData = await getCollectionArtwork(params.slug, selected.notable)

  const props = {
    ...artworkData,
  }

  return {
    props,
    revalidate: 10,
  }
}

export default Page
