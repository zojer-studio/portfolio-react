'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArticleThumbnail } from '@/components/organisms/ArticleThumbnail'
import { StickyCardHeader } from '@/components/StickyCard'
import { CurrentTime } from '@/components/CurrentTime'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface TabsWithScrollProps {
  articles: any[];
  demos: any[];
  defaultTab?: string;
}

export default function HomeTabsWithScroll({ articles, demos, defaultTab = 'work' }: TabsWithScrollProps) {
  const router = useRouter()

  const handleTabValueChange = (value: string) => {
    // Update URL - remove all search params for clean URLs
    router.push('/', { scroll: false })
    
    // Multiple approaches to ensure scrolling works regardless of content height
    setTimeout(() => {
      // Method 1: Direct element scrollTop (immediate)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      
      // Method 2: window.scrollTo with smooth behavior (for visual effect)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      
      // Method 3: Force scroll by trying to scroll to a specific element (fallback)
      const topElement = document.querySelector('body')
      if (topElement) {
        topElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100) // Increased delay to ensure tab content has fully rendered
  }

  return (
    <Tabs 
      id="tabs" 
      defaultValue={defaultTab} 
      className="mt-0 flex flex-col"
      onValueChange={handleTabValueChange}
    >
      <StickyCardHeader className="sticky top-[-81px] z-0">
        {/* <h2 className="text-lg pl-4 pt-4">Stuff</h2> */}
        <div className="p-4 pb-0 ml-4 mt-4">
          <p className="text-lg text-tx-body italic">We all fall, and we all land somewhere.</p>
          <Tooltip>
            <TooltipTrigger asChild>
              <CurrentTime className="text-sm font-mono text-tx-secondary" />
            </TooltipTrigger>
            <TooltipContent>
              <p>this site is v in-progress lol</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <TabsList className="pt-4 flex items-center font-mono text-xs">
          <TabsTrigger 
            value="work" 
            className="w-full"
          >
            work
          </TabsTrigger>
          <TabsTrigger 
            value="demos" 
            className="w-full"
          >
            demos
          </TabsTrigger>
          <TabsTrigger 
            value="blog" 
            className="w-full"
          >
            blog
          </TabsTrigger>
          <TabsTrigger 
            value="about" 
            className="w-full"
          >
            about
          </TabsTrigger>
        </TabsList>
        
      </StickyCardHeader>

      <div className="flex-1">
        <TabsContent value="work" className="flex flex-col m-0">
          <ul className="grid grid-cols-1 gap-12 w-full p-4">
            { articles
              .filter(({ visible, path }) => visible && path.startsWith('/work/'))
              .map(({ title, subtitle, year, thumbnail, path }) => (
                <Link key={path} className={clsx('w-full')} href={path}>
                  <ArticleThumbnail title={title} subtitle={subtitle} thumbnail={thumbnail}/>
                </Link>
              ))}
          </ul>
        </TabsContent>
        <TabsContent value="demos" className="flex flex-col m-0">
          <ul className="grid grid-cols-1 gap-12 w-full p-4">
            { demos
              .filter(({ visible }) => visible)
              .map(({ title, subtitle, year, thumbnail, path }) => (
                <Link key={path} className={clsx('w-full')} href={path}>
                  <ArticleThumbnail title={title} subtitle={subtitle} thumbnail={thumbnail}/>
                </Link>
              ))}
          </ul>
        </TabsContent>
        <TabsContent value="blog" className="px-6 flex flex-col items-center max-w-[900px] m-0">
          <div className="my-4 bg-bg-secondary rounded w-full p-4 flex flex-col items-center">
            <p className="italic text-tx-secondary">Coming soon (to theaters near you)</p>
          </div>
        </TabsContent>
        <TabsContent value="about" className="px-6 flex flex-col items-center max-w-[900px] m-0">
          <div className="my-4 rounded w-full p-4 flex flex-col gap-3 text-md">
            <p className="text-tx-body">I design both interfaces and code.</p>
            <p className="text-tx-body">I consider myself, first-and-foremost, a designer. I graduated from the University of Washington&apos;s prestigious Interaction Design program in 2024, where I ultimately focused on sharpening my design process. This involved extensive user research&mdash;both academically, and professionally.</p>
            <p className="text-tx-body">But historically, I&apos;ve spent a lot of time developing. I have extensive experience in frontend technologies. My bread-and-butter is Next.js and TailwindCSS, which I have been practicing since 2020. Recently, I&apos;ve developed proficiency in Rust (backend) and Swift (iOS). I&apos;ve also worked with 3D technologies: namely, prototyping with extended reality (XR) in C# (Unity + Meta&apos;s XR SDK). My niche in XR focuses on hand/gestural interactions&mdash;i.e., designing for a future without traditional controllers.</p>
            <p className="text-tx-body">When I was in high school, I was introduced to computer science, and later on, &ldquo;Special Topics&rdquo; &mdash; a class dedicated to data structures and algorithms (taught by Microsoft TEALS). Programming came very naturally to me, and my teachers were extremely effective at helping us build a deep gnosis for efficent computing. This set a strong technical foundation for &ldquo;left brain&rdquo; activity (in other words, engineering).</p>
            <p className="text-tx-body">But after being denied to UW&apos;s (very competitive) CSE program, I found myself forced to engage with my &ldquo;right brain&rdquo;. In this, I&apos;ve come to understand that design is the intersection between art and engineering&mdash;and this blend guides everything I do. My calling is to build products for end-users, and this entails picking up any hard skill that serves that end.</p>
            <p className="text-tx-body">I believe my greatest strength is that I do for the sake of doing&mdash;and in trying to do the best I can, I&apos;ve developed a strong sense for where my energy is most valuable. This means walking the line of expansion and contraction; confidence is knowing what you don&apos;t know, and I walk the line well. I seek out information when it&apos;s needed, and shift my focus to action once I&apos;ve accumulated enough. (e.g. knowing when I need to do user research, and when I&apos;ve learned enough.)</p>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  )
}
