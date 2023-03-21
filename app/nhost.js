import { NhostClient } from '@nhost/react'

const nhost = new NhostClient({
  subdomain: '<your-subdomain>',
  region: '<your-region>'
})

export { nhost }