
import { createClient } from "next-sanity"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export const hasSanityEnvironment = Boolean(projectId && dataset && apiVersion)

export const client = hasSanityEnvironment
  ? createClient({
      projectId: projectId as string,
      dataset: dataset as string,
      apiVersion: apiVersion as string,
      useCdn: true,
    })
  : null