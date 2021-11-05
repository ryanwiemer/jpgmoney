import { useState, useEffect } from 'react'

function formatNumber(num) {
  let value = +(Math.round(num + 'e+2') + 'e-2')
  let formatCommas = new Intl.NumberFormat('en-US')
  let res = formatCommas.format(value)
  return res
}

function toUSD(number, rate) {
  let value = number * rate
  let formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  let usd = formatCurrency.format(value)
  return usd
}

export { toUSD, formatNumber }
