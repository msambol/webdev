import { Section } from './Section'
import './LearnMore.scss'
import { ExternalLink } from './ExternalLink'

export const LearnMore = () => (
  <Section className="LearnMore" title="Learn More" subtitle="Not sure what to pick? We're here to help.">
    <ExternalLink url="https://www.imdb.com/what-to-watch/watch-guides/?ref_=hm_watch_wchgd">Learn more</ExternalLink>
    <ExternalLink url="https://www.imdb.com/what-to-watch/popular/?ref_=hm_watch_pop">Most popular</ExternalLink>
  </Section>
)
