import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed';
import './twitter.css'

export function Tweet1() {
  return (
    <>
    <TwitterTweetEmbed
    tweetId={'1506025327574802433'}
    conversation="none"
    data-cards="hidden"
/>
    </>
  )
}


export function Tweet2() {
    return (
      <>
      <TwitterTweetEmbed
      tweetId={'1373663806346424321'}
      conversation="none"
      data-cards="hidden"
      theme= "dark"
    
  />
      </>
    )
  }

  export function Tweet3() {
    return (
      <>
      <TwitterTweetEmbed
      tweetId={'1353456058824499201'}
      conversation="none"
      data-cards="hidden"
      theme= "dark"
    
  />
      </>
    )
  }
  
  export function Tweet4() {
    return (
      <>
      <TwitterTweetEmbed
      tweetId={'1506049678013575178'}
      conversation="none"
      data-cards="hidden"
      theme= "dark"
    
  />
      </>
    )
  }