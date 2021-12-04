/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        © 2021
        Created using <Link to="https://www.gatsbyjs.com/">Gatsby</Link> and <Link to="https://github.com/stackrole/gatsby-starter-foundation">Foundation</Link>
      </p>
    </div>
  </footer>
)

export default Footer
