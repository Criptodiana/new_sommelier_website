import React from "react"
import Navigation from './Navigation'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"

import StoryblokService from '../utils/storyblok-service'

export default function Layout({ children, location, lang }){
  const { settings } = useStaticQuery(graphql`
  query Settings {
    settings: allStoryblokEntry(filter: {field_component: {eq: "settings"}}) {
      edges {
        node {
          name
          full_slug
          content
        }
      }
    }
  } 
  `)
  let { pathname } = location
  let language = pathname.split("/")[1].replace('/', '')
  let activeLanguage = ['de', 'en'].includes(language) ? language : 'en'

  let correctSetting = settings.edges.filter(edge => edge.node.full_slug.indexOf('settings') > -1)
  let hasSetting = correctSetting && correctSetting.length ? correctSetting[0].node : {}
  let content = typeof hasSetting.content === 'string' ? JSON.parse(hasSetting.content) : hasSetting.content
  let parsedSetting = Object.assign({}, content, {content: content})

  return (
    <div className="bg-gray-300">
      <Helmet
          script={[
            {"src": `//app.storyblok.com/f/storyblok-latest.js?t=${StoryblokService.token}`, 
            "type": "text/javascript"}
          ]}
      />
      <Helmet
          script={[
            {
            "innerHTML": `var StoryblokCacheVersion = '${StoryblokService.getCacheVersion()}';`,
            "type": "text/javascript"
            }
          ]}
      />
      <Navigation settings={parsedSetting} lang={activeLanguage} pathname={pathname}/>
      <main>
      { children }
      </main>
      <Footer />
    </div>
  )
}