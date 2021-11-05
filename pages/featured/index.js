import { NextSeo } from 'next-seo'
import { getCollection } from '../../lib/openSeaAPI'
import featured from '../../lib/data'
import CardList from '../../components/CardList'
import Card from '../../components/Card'
import Curtain from '../../components/Curtain'
import Bottleneck from 'bottleneck'

function Page(props) {
  const pages = props.allFeaturedData

  return (
    <>
      <NextSeo
        title="Featured NFTs"
        description="Select NFT projects containing some of the most covetted JPGs on the planet"
        openGraph={{
          images: [
            {
              url: pages[0].bannerImage.src,
              width: pages[0].bannerImage.width,
              height: pages[0].bannerImage.height,
            },
          ],
        }}
      />
      <Curtain />
      <CardList>
        {pages.map((page, index) => (
          <Card
            key={index}
            name={page.name}
            link={`/featured/${page.slug}`}
            image={page.bannerImage}
            placeholder={page.bannerPlaceholder}
          />
        ))}
      </CardList>
    </>
  )
}

export async function getStaticProps() {
  const limiter = new Bottleneck({
    maxConcurrent: 1,
    minTime: 500,
  })
  const allFeaturedData = await Promise.all(
    featured.map(async collection => {
      return limiter.schedule(() => {
        const res = getCollection(collection.slug)
        return res
      })
    }),
  )

  const props = { allFeaturedData }

  return {
    props,
  }
}

export default Page
