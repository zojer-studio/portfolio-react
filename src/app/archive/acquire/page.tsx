import Image from 'next/image'
import '@/app/styles.css'
import SiteBar from '@/components/ui/custom/SiteBar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

import ScrollButton from '@/components/ui/custom/scroll-button'
import Footer from '@/components/ui/custom/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Acquire() {
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
            <span className="border-b-[1px] border-bd-base pt-1.5 pb-[7px] px-1 text-tx-primary">acquire</span>
      </nav>

      <article className="text-tx-body mt-16">
        <header>
          <h1 className="text-tx-primary">Digitizing the life insurance industry</h1>
          <h3 className="font-mono text-tx-tertiary">2022 ※ Design systems, user workflows</h3>
          <p className="text-md">At Sureify, our mission was to digitize the life insurance industry. In this case, we </p>
          <div className="card mb-4 ">
              <Image
                src="https://schultzdavidg-portfolio.s3.us-west-1.amazonaws.com/images/aq/aq_overview.png"
                alt="datavis"
                height={0}
                width={0}
                sizes="225vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <small className="text-tx-tertiary">Co-designed with DJ Mackintosh</small>
          </div>
        </header>

        <Separator className="my-12" />{/*————————————————————————————*/}

        <section>
            <h3 className="text-tx-primary font-mono w-full pb-1 border-b-[1px] border-bd-primary border-dashed border-spacing-4"># The Acquisition Lifecycle</h3>
            <p>What it boils down to is that ___.</p>
        </section>

        <section>
            <h3 className="text-tx-primary font-mono w-full pb-1 border-b-[1px] border-bd-primary border-dashed border-spacing-4"># Project goals</h3>
            <ol className="styled text-md">
                <li>Build a clickable demo</li>
                <li>Upgrade to sureUI</li>
                <li>Prototype new features</li>
            </ol>
            <p>What it boils down to is that ___.</p>
        </section>

        <section>
            <h3 className="text-tx-primary font-mono w-full pb-1 border-b-[1px] border-bd-primary border-dashed border-spacing-4"># The squad</h3>
            <p>Typically, design work at Sureify was scoped by either the product team or a client team. However, this project was issued to the demo team—and it created an entirely different paradigm for us (as designers).</p>
            <p>What was it like to learn to work with this team? Who was on it? What kind of relationships formed?</p>


            <h3 className="text-tx-primary font-mono w-full pb-1 border-b-[1px] border-bd-primary border-dashed border-spacing-4">## Project goals</h3>
            <ol className="styled text-md">
                <li>Build a clickable demo</li>
                <li>Upgrade to sureUI</li>
                <li>Prototype new features</li>
            </ol>
        </section>


        <section>
            <h3 className="text-tx-primary font-mono w-full pb-1 border-b-[1px] border-bd-primary border-dashed border-spacing-4"># End-to-end workflows</h3>
            <ol className="styled text-md">
                <li><a href="#quote_anchor">Quote</a></li>
                <li><a href="#application_anchor">Application</a></li>
                <li><a href="#ontrack_anchor">OnTrack™</a></li>
            </ol>
        </section>

        <section id="quote_anchor">
            <h3 className="text-tx-primary font-mono w-full pb-1 border-b-[1px] border-bd-primary border-dashed border-spacing-4">## Quote</h3>
            <div className="flex gap-8">
                <p>Policyholder quote</p>
                <p>Agent quote</p>
            </div>
        </section>

        <section id="application_anchor">
            <h3 className="text-tx-primary font-mono w-full pb-1 border-b-[1px] border-bd-primary border-dashed border-spacing-4">## Application</h3>
        </section>

        <section id="ontrack_anchor">
            <h3 className="text-tx-primary font-mono w-full pb-1 border-b-[1px] border-bd-primary border-dashed border-spacing-4">## OnTrack™</h3>
        </section>

        <section className="mb-64">

        </section>

      </article>

      <ScrollButton />
    </main>
    </div>
  )
}
