import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Page Builder',
  projectId: "zreyizoa",
  dataset: "production",
  plugins: [structureTool(), visionTool(), unsplashImageAsset()],

  schema: {
    types: schemaTypes,
  },
})
