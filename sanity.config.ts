import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./src/sanity/schemas"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

if (!projectId || !dataset) {
  throw new Error("Missing Sanity environment variables")
}

export default defineConfig({
	name: "devlance-studio",
	title: "Devlance CMS",
	projectId,
	dataset,
	basePath: "/studio",
	plugins: [structureTool()],
	schema: { types: schemaTypes },
})
