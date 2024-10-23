interface LinkPath {
  home: string
  blog: {
    home: string
    article: string
    category: string
  }
}
export const linkPath: LinkPath = {
  home: "/orcashark/",
  blog: {
    home: "/orcashark/blog/",
    article: "/orcashark/blog/",
    category: "/orcashark/blog/category/"
  }
}