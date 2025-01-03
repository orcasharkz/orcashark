export const getPath = (slug?: string) => (
  {
    home: "/orcashark/",
    blog: {
      post: `/orcashark/blog/${slug}/`,
      category: `/orcashark/blog/category/${slug}/`
    }
  }
)