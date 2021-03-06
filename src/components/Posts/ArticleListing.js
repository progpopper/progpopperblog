import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import Img from "gatsby-image"

const Column = styled.div`
  margin-bottom: 1.5rem;
`

const PostDivider = styled.hr`
  width: 100%;
  position: relative;
  padding: 0;
  border: 0;
  height: 0.5rem;
  line-height: 0.5rem;
  background: none;
  height: 3.5rem;
  line-height: 3.5rem;
  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;

    width: 100%;
    border-top: solid 1px rgba(255, 255, 255, 0.18);
    height: 1px;
  }
`

const OddColumnInner = styled.div`
  text-align: center;
  padding: 0rem 0rem;
  /* width: 38rem; */
  background-color: transparent;
  display: flex;
  align-items: space-between;
  vertical-align: top;
  position: relative;
  max-width: 100%;
  border-radius: inherit;
  @media (max-width: 736px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const OddColumnInnerImage = styled.div`
  -moz-flex-shrink: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-shrink: 0;
  flex-shrink: 0;
  -moz-flex-grow: 0;
  -webkit-flex-grow: 0;
  -ms-flex-grow: 0;
  flex-grow: 0;
  max-width: 100%;
  padding: 0 0 0 2.5rem;

  width: calc(50% + 1.25rem);
  text-align: right;

  @media (max-width: 736px) {
    width: 100%;
    padding: 0;
    margin-bottom: 10px;
  }
`

const OddColumnImageText = styled.div`
  width: 100%;
  flex-grow: 0;
  max-width: 100%;
  padding: 0 0 0 2.5rem;
  -moz-flex-shrink: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-shrink: 0;
  flex-shrink: 0;
  @media (max-width: 736px) {
    width: 100%;
    padding: 0;
  }

  p {
    margin-top: rem !important;
    margin-bottom: rem !important;
    color: #ffffff;
    font-family: "Source Sans Pro", sans-serif;
    letter-spacing: 0.1rem;
    width: calc(100% + 0.025rem);
    font-size: 1em;
    line-height: 1.75;
    font-weight: 200;
  }
`

const OddColumnInnerUl = styled.ul`
  margin-bottom: 0 !important;
  margin-top: 1rem;
  width: calc(100% + 0.75rem);
  margin-left: -0.375rem;
  cursor: default;
  padding: 0;
  letter-spacing: 0;
  li {
    display: inline-block;
    vertical-align: middle;
    max-width: calc(100% - 0.75rem);
    margin: 0.375rem;

    a {
      color: #ffffff;
      border: solid 1px #ffffff;

      text-decoration: none;
      text-align: center;
      white-space: nowrap;
      max-width: 100%;
      -moz-align-items: center;
      -webkit-align-items: center;
      -ms-align-items: center;
      align-items: center;
      -moz-justify-content: center;
      -webkit-justify-content: center;
      -ms-justify-content: center;
      justify-content: center;
      vertical-align: middle;

      display: -moz-flex;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      width: 7rem;
      height: 2.5rem;
      line-height: 2.5rem;
      vertical-align: middle;
      padding: 0 1.25rem;
      text-transform: uppercase;
      font-size: 0.625em;
      font-family: "Montserrat", sans-serif;
      letter-spacing: 0.3rem;
      padding-left: calc(0.3rem + 1.25rem);
      font-weight: 300;
      border-radius: 2rem;
    }
  }
`

const ImageWrapDiv = styled.a`
  position: relative;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  img {
    width: 15rem;
    border-radius: 0.375rem;
    display: block;

    max-width: 100%;

    vertical-align: top;
  }
`

const ArticleListing = ({ post }) => (
  <div>
    <Column>
      <OddColumnInner>
        <OddColumnImageText>
          <p id="text10">{post.title}</p>
          <p id="text11">{post.body.childMarkdownRemark.excerpt}</p>
          <OddColumnInnerUl>
            <li>
              <Link to={post.slug}>More</Link>
            </li>
          </OddColumnInnerUl>
        </OddColumnImageText>
      </OddColumnInner>
    </Column>
    <PostDivider />
  </div>
)

export default ArticleListing
