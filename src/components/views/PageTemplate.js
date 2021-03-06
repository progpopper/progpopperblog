import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import backx from "../../images/backx.jpg"

export const MainWrapper = styled.div`
  min-width: 320px;
  min-height: 100vh;
  line-height: 1;
  word-wrap: break-word;
  overflow-x: hidden;
  &:before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    -moz-pointer-events: none;
    -webkit-pointer-events: none;
    -ms-pointer-events: none;
    pointer-events: none;
    -moz-transform: scale(1);
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    background-image: linear-gradient(
        45deg,
        rgba(191, 117, 135, 0.639) 0%,
        rgba(214, 255, 255, 0.631) 100%
      ),
      url(${backx});
    background-position: 0% 0%, center;
    background-repeat: repeat, no-repeat;
    background-size: cover, cover;
    background-attachment: scroll;
    background-color: #ffffff;
  }
`

export const DivWrapper = styled.div`
  -webkit-overflow-scrolling: touch;
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding: 3.5rem 3.5rem 3.5rem 3.5rem;
  @media (max-width: 480px) {
    padding: 0.75rem 0.75rem 0.75rem 0.75rem;
  }
`

export const Maindiv = styled.div`
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  position: relative;
  max-width: 100%;
  z-index: 1;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -moz-flex-grow: 0;
  -webkit-flex-grow: 0;
  -ms-flex-grow: 0;
  flex-grow: 0;
  -moz-flex-shrink: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-shrink: 0;
  flex-shrink: 0;
  text-align: left;
  background-color: rgba(44, 42, 54, 0.8);
  box-shadow: 0rem 3rem 3.125rem 0rem rgba(44, 42, 54, 0.451);
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  -moz-transition: opacity 1.25s ease 0s, -moz-transform 1.25s ease 0s;
  -webkit-transition: opacity 1.25s ease 0s, -webkit-transform 1.25s ease 0s;
  -ms-transition: opacity 1.25s ease 0s, -ms-transform 1.25s ease 0s;
  transition: opacity 1.25s ease 0s, transform 1.25s ease 0s;
`

export const InnerDiv = styled.div`
  position: relative;
  z-index: 1;
  border-radius: inherit;
  padding: 3.75rem 3rem;
  max-width: 100%;
  width: 90%;
  font-family: Poppins;
  @media (max-width: 736px) {
    padding: 0.75rem 0.75rem;
  }
`

export const HomeSection = styled.section`
  -moz-transition: opacity 0.5s ease-in-out 0.25s, min-height 0.25s ease-in-out,
    max-height 0.25s ease-in-out;
  -webkit-transition: opacity 0.5s ease-in-out 0.25s,
    min-height 0.25s ease-in-out, max-height 0.25s ease-in-out;
  -ms-transition: opacity 0.5s ease-in-out 0.25s, min-height 0.25s ease-in-out,
    max-height 0.25s ease-in-out;
  transition: opacity 0.5s ease-in-out 0.25s, min-height 0.25s ease-in-out,
    max-height 0.25s ease-in-out;
`

export const Footer = styled.footer`
  margin-top: 1.5rem;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  display: block;
`

export const FooterContainer = styled.div`
  margin-top: 1.5rem;
`

export const FooterInner = styled.div`
  vertical-align: top;
  position: relative;
  max-width: 100%;
  border-radius: inherit;

  text-align: center;
  padding: 0rem 0rem;
  width: 100%;
  background-color: transparent;
  display: inline-block;

  ul {
    margin-bottom: 1rem;
    cursor: default;
    padding: 0;
    letter-spacing: 0;
    font-size: 1.375em;
    width: calc(100% + 1.25rem);
    margin-left: -0.625rem;
    list-style: none;

    li {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      z-index: 1;
      margin: 0.625rem;

      a {
        display: -moz-flex;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        -moz-align-items: center;
        -webkit-align-items: center;
        -ms-align-items: center;
        align-items: center;
        -moz-justify-content: center;
        -webkit-justify-content: center;
        -ms-justify-content: center;
        justify-content: center;
        border-radius: 100%;
        width: 2em;
        height: 2em;
      }
    }
  }
`
