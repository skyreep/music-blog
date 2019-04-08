import React from "react"
import { css } from "@emotion/core"
import { StaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
}
    render={data => (
    <div
    css={css`
            margin: 0 auto;
            max-width: auto;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
            background: rgb(68,241,156);
            background: linear-gradient(329deg, rgba(68,241,156,1) 0%, rgba(70,93,252,1) 100%);
            `}
    >
        <div
            css={css`
            margin: 0 auto;
            max-width: 750px;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
            background-color: white;
            opacity: .8;
            `}
        >

            <Link to={`/`}>
            <h3
                css={css`
                display: inline-block;
                font-style: normal;
                `}
            >
                {data.site.siteMetadata.title}
            </h3>
            </Link>
            {children}
        </div>

        <div
                css={css`
                    text-align: center;
                `}
            >
                <img src="https://media.giphy.com/media/42ECS6s7l8dzMREFim/giphy.gif"
                    css={css`
                        padding-top: 3rem;
                        width: 6rem;
                    `}
                ></img>
            </div>
    </div>
    )}
  />
)