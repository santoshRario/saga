export interface Blog {
  id: number
  title: string
  isPublished: boolean
  summary: string
  publishedAt: string
  coverImageUrl: string
  description: any
  sys: {
    id: string
  }
}

