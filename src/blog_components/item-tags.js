import React from "react"
import { Link } from "@chakra-ui/react"
import { Link as GLink } from "gatsby"
import useMinimalBlogConfig from "../hooks/use-minimal_blog-config"
import replaceSlashes from "../utils/replaceSlashes"

const ItemTags = ({ tags }) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <React.Fragment>
      {tags.map((tag, i) => (
        <React.Fragment key={tag.slug}>
          {!!i && `, `}
          <Link
            as={GLink}
            to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}
          >
            {tag.name}
          </Link>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default ItemTags
