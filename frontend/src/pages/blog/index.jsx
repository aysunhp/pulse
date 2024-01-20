import React from 'react'
import { Helmet } from 'react-helmet'

const Blog = () => {
  return (
   <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Blog</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>Blog</div>
   </>
  )
}

export default Blog