import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
// import '@/app/styles.css'
import '@/lib/transform.css'
import { getAllArticles } from '@/lib/articles'
import { getAllDemos } from '@/lib/demos'
import { ThemeButtons } from '@/components/ThemeButtons'
import HomeTabsWithScroll from '@/components/HomeTabsWithScroll'
import { StickyCard, StickyCardMask, StickyCardNav } from '@/components/StickyCard'

export default async function Home() {
  // Fetch articles data directly in the component (server-side)
  const articles = await getAllArticles();
  const demos = await getAllDemos();

  console.log('=== SERVER: Demos loaded ===', demos);
  console.log('=== SERVER: Demos count ===', demos.length);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <section className="md:col-span-4 flex flex-col gap-4 md:sticky md:top-0 md:py-16 self-start md:h-screen">
        <Image
          src={'/images/star-sketch.png'}
          alt="logo"
          height={150}
          width={150}
          sizes="10vw"
          priority
          className=""
        />
        <Link href="/"><h1 className="font-serif text-tx text-lg">david schultz</h1></Link>
        <p className="flex-grow">designer who codes</p>
        {/* <ThemeButtons /> */}
        {/* I'm feeling lucky button */}
        <p className="">© 2025</p>
      </section>

      <main className="md:col-span-8">
          <StickyCardMask />
          <StickyCard>
            {/* <StickyCardNav href="/?tab=demos" destination="demos" page ="page" /> */}
            <Suspense fallback={<div>Loading...</div>}>
              <HomeTabsWithScroll articles={articles} demos={demos} />
            </Suspense>
          </StickyCard>
      </main>
    </div>
  )
}


