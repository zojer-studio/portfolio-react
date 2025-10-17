// 'use client'

// import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import VideoPlayer from "@/components/VideoPlayer"
import { OpenInBrowser, ViewStructureUp, Search, Group, Hammer, Page, StatsReport, GraphDown, Circle, Camera } from 'iconoir-react'
import DataVisTabs from '@/app/archive/datavis/datavisTabs';
import ScrollButton from '@/components/ui/custom/scroll-button';


// import useWindowResize from '@/lib/useWindowResize';

// // Inside your component
// const isMobile = useWindowResize();


export default function Datavis() {
  // const [tabClicked, setTabClicked] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
    <main className="md:col-span-8">

      <nav className="flex gap-1 font-mono text-xs sticky top-0 pt-16 bg-bg z-[10000]">
            <Button variant="tab" size="tab" asChild>
              <Link href="/">davidschultz.co</Link>
            </Button>
            <span className="border-b-[1px] border-bd/0 pt-1.5 pb-[7px] px-1 text-ic-tertiary">/</span>
            <Button variant="tab" size="tab" asChild>
              <Link href="/">write-ups</Link>
            </Button>
            <span className="border-b-[1px] border-bd/0 pt-1.5 pb-[7px] px-1 text-ic-tertiary">/</span>
            <span className="border-b-[1px] border-bd-base pt-1.5 pb-[7px] px-1 text-tx-primary">datavis</span>
      </nav>

      <article className="text-tx-body mt-16">
        <header>
          <h1 className="text-tx-primary">sureUI Data Visualization</h1>
          <h3 className="font-mono text-tx-tertiary">2022 ※ Design systems, components</h3>
          <p className="text-md">Building a “time machine” in mixed reality. This course was my first encounter with designing in XR. My team designed a new type of calendar—one that utilizes 3d-space. I was responsible for building a working prototype in Unity for the Quest 3.</p>
          <div className="card mb-4 ">
              <VideoPlayer width="600" height="400"
                videoUrl='https://schultzdavidg-portfolio.s3.us-west-1.amazonaws.com/images/dv/dv-bar_animation.webm'
                gifUrl='https://schultzdavidg-portfolio.s3.us-west-1.amazonaws.com/images/dv/dv-bar_animation.gif'
              />
              <small className="text-tx-tertiary">Advised by Arjan van der Vlies, Anders Houston, Patrick Schaenzel</small>
          </div>
        </header>
        <DataVisTabs />
      </article>
      <ScrollButton />
    </main>
    </div>
  )
}

