import { getPlaiceholder } from 'plaiceholder'
import axios from 'axios'
import Bottleneck from 'bottleneck'

const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 500,
})

// Get latest top sale for Homepage
export async function getLatest(collection) {
  const res = await axios.get(
    `https://api.opensea.io/api/v1/assets?order_by=sale_date&order_direction=desc&offset=0&limit=1&collection=${collection}`,
    {
      headers: { 'X-API-KEY': process.env.OS_KEY },
    },
  )
  const { base64, img } = await getPlaiceholder(res.data.assets[0].image_url)
  return limiter.schedule(() => {
    return {
      name: res.data.assets[0].name,
      image: img,
      placeholder: base64,
      link: res.data.assets[0].permalink,
      saleRawPrice: res.data.assets[0].last_sale.total_price,
      saleDecimals: res.data.assets[0].last_sale.payment_token.decimals,
      saleDate: res.data.assets[0].last_sale.transaction,
      saleCurrency: res.data.assets[0].last_sale.payment_token.symbol,
      saleRate: res.data.assets[0].last_sale.payment_token.usd_price,
    }
  })
}

// Get basic collection data for Featured page
export async function getCollection(collection) {
  const res = await axios.get(
    `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=1&collection=${collection}`,
    {
      headers: { 'X-API-KEY': process.env.OS_KEY },
    },
  )
  const { base64, img } = await getPlaiceholder(
    res.data.assets[0].collection.banner_image_url,
  )
  return limiter.schedule(() => {
    return {
      name: res.data.assets[0].collection.name,
      description: res.data.assets[0].collection.description,
      slug: collection,
      bannerImage: img,
      bannerPlaceholder: base64,
    }
  })
}

// Get all the data for the Slug pages in a single function
export async function getCollectionArtwork(collection, notable) {
  const res = await axios.get(
    `https://api.opensea.io/api/v1/assets?order_by=sale_price&order_direction=desc&offset=0&limit=10&collection=${collection}`,
    {
      headers: { 'X-API-KEY': process.env.OS_KEY },
    },
  )
  const artworkData = await Promise.all(
    res.data.assets.map(async asset => {
      const { base64, img } = await getPlaiceholder(asset.image_url)
      return limiter.schedule(() => {
        return {
          name: asset.name,
          image: img,
          placeholder: base64,
          link: asset.permalink,
          saleRawPrice: asset.last_sale.total_price,
          saleDecimals: asset.last_sale.payment_token.decimals,
          saleDate: asset.last_sale.transaction,
          saleCurrency: asset.last_sale.payment_token.symbol,
          saleRate: asset.last_sale.payment_token.usd_price,
        }
      })
    }),
  )

  const res2 = await axios.get(
    `https://api.opensea.io/api/v1/collection/${collection}`,
    {
      headers: { 'X-API-KEY': process.env.OS_KEY },
    },
  )
  const { base64, img } = await getPlaiceholder(
    res2.data.collection.banner_image_url,
  )

  const collectionData = {
    name: res2.data.collection.name,
    description: res2.data.collection.description,
    floor: res2.data.collection.stats.floor_price,
    totalSales: res2.data.collection.stats.total_sales,
    totalVolume: res2.data.collection.stats.total_volume,
    slug: collection,
    bannerImage: img,
    bannerPlaceholder: base64,
    rate: res2.data.collection.payment_tokens[0].usd_price,
  }

  let notableData = null
  try {
    const res3 = await axios.get(
      `https://api.opensea.io/api/v1/asset/${res.data.assets[0].asset_contract.address}/${notable.id}/`,
      {
        headers: { 'X-API-KEY': process.env.OS_KEY },
      },
    )
    const { base64: notablePlaceholder, img: notableImage } =
      await getPlaiceholder(res3.data.image_url)

    notableData = {
      name: res3.data.name,
      notableDescription: notable.description,
      image: notableImage,
      placeholder: notablePlaceholder,
      link: res3.data.permalink,
      saleRawPrice: res3.data.last_sale.total_price,
      saleDecimals: res3.data.last_sale.payment_token.decimals,
      saleDate: res3.data.last_sale.transaction,
      saleCurrency: res3.data.last_sale.payment_token.symbol,
      saleRate: res3.data.last_sale.payment_token.usd_price,
    }
  } catch {}

  return limiter.schedule(() => {
    return {
      collection: collectionData,
      artwork: artworkData,
      notable: notableData,
    }
  })
}
