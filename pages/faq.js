import { Container } from 'theme-ui'
import { NextSeo } from 'next-seo'
import AccordionList from '../components/AccordionList'
import Accordion from '../components/Accordion'
import Header from '../components/Header'
import Curtain from '../components/Curtain'

export default function faq() {
  return (
    <>
      <Curtain />
      <Container>
        <NextSeo
          title="FAQ"
          description="Frequently Asked Questions about NFTs and crypto art"
        />
        <Header text="Frequently Asked Questions" />
        <AccordionList>
          <Accordion heading="Why are these JPGs so dang expensive?">
            <p>
              For the same reason that a baseball card of Micky Mantle might be
              considered valuable. Scarcity along with a price tag that goes as
              high as someone is willing to pay.
            </p>
          </Accordion>
          <Accordion heading="Wait, can't anyone just download a JPG?">
            <p>
              Well, yes but that is not the point. 😉 Buyers purchasing artwork
              are actually buying a verifiable and non-fungible certificate of
              authenticity. Think of it like a digital receipt. Whether or not
              that &quot;proof&quot; of ownership justifies the cost is entirely
              up to the individual. For a more detailed response see this{' '}
              <a
                href="https://twitter.com/dclblogger/status/1437174689466441734?s=21"
                target="_blank"
                rel="noreferrer"
              >
                Twitter thread
              </a>
              .
            </p>
          </Accordion>
          <Accordion heading="Is this a cult? Who would buy this?">
            <p>
              It certainly seems ludicrous. The NFT movement is full of die hard
              believers and critics alike. This website was created simply to
              gawk at the prices. There are plenty of venues on the internet to
              debate the merits.
            </p>
          </Accordion>

          <Accordion heading="What exactly is a non-fungible token (NFT)?">
            <p>
              An NFT is a unique digital token. It is stored on a digital ledger
              (block chain) and certifies a digital asset to be unique. NFTs are
              commonly used for JPGs like the ones shown on this website but can
              also be used to represent other forms of media such as music and
              videos.
            </p>
          </Accordion>
          <Accordion heading="What is ether (ETH)?">
            <p>
              It is the cryptocurrency used on the Ethereum blockchain. The
              majority of cryptoart lives on Ethereum and ETH is used to
              purchase NFTs.
            </p>
          </Accordion>
          <Accordion heading="Why do the USD estimates fluctuate on this website?">
            <p>
              Cryptocurrency is in a constant state of fluctuation. All United
              States dollar (USD) prices shown reflect the current exchange rate
              and not necessarily the value at the time of sale.
            </p>
          </Accordion>
          <Accordion heading="WAGMI, ser, gm, fren, etc. What does all this gibberish mean?">
            <p>
              The crypto art world is full of slang, acronyms and an
              ever-evolving vocabulary. This{' '}
              <a
                href="https://twitter.com/punk6529/status/1433002033242595338?s=20"
                target="_blank"
                rel="noreferrer"
              >
                Twitter thread
              </a>{' '}
              contains a helpful overview.
            </p>
          </Accordion>
          <Accordion heading="Can I suggest an NFT collection to be featured?">
            <p>
              Yes. If you would like to make a suggestion please{' '}
              <strong>
                <a
                  href="https://github.com/ryanwiemer/jpgcult/issues"
                  target="_blank"
                  rel="noreferrer"
                >
                  create an issue on GitHub
                </a>
              </strong>
              .
            </p>
          </Accordion>
        </AccordionList>
      </Container>
    </>
  )
}
