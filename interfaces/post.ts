import type MetaDataType from './meta-data-type'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  metaData: MetaDataType
  excerpt: string
  ogImage: {
    url: string
  }
  ogTitle: string
  content: string
}

export default PostType
