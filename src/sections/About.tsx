'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import book from '@/assets/images/book-cover.png'
import map from '@/assets/images/map.png'
import memoji from '@/assets/images/memoji-smile.png'

import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CSSIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import CardHeader from '@/components/CardHeader'
import Toolbox from '@/components/Toolbox'
import { useRef } from 'react'

const toolbox = [
  { title: 'Javascript', icon: JavascriptIcon },
  { title: 'HTML5', icon: HTMLIcon },
  { title: 'CSS3', icon: CSSIcon },
  { title: 'React', icon: ReactIcon },
  { title: 'Chrome', icon: ChromeIcon },
  { title: 'Github', icon: GithubIcon },
]

const hobbies = [
  { title: 'Painting', emoji: '🎨', left: '5%', top: '5%' },
  { title: 'Photography', emoji: '📷', left: '50%', top: '5%' },
  { title: 'Hiking', emoji: '🥾', left: '30%', top: '40%' },
  { title: 'Gaming', emoji: '🎮', left: '10%', top: '35%' },
  { title: 'Music', emoji: '🎵', left: '70%', top: '45%' },
  { title: 'Fitness', emoji: '🏋️', left: '5%', top: '65%' },
  { title: 'Reading', emoji: '📕', left: '45%', top: '70%' },
]

export const AboutSection = () => {
  const constraintRef = useRef(null)

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="A Glimpse Into My World"
          eyebrow="About Me"
          description="Learn more about who I am, what I do and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={book} alt="Book Cover" className="" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                className=""
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <Toolbox
                wrapperClassName="animate-move-left [animation-duration:30s]"
                items={toolbox}
              />
              <Toolbox
                className="mt-6"
                wrapperClassName="animate-move-right [animation-duration:15s]"
                items={toolbox}
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={map}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-['] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10" />
                <Image src={memoji} alt="Simling Memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
