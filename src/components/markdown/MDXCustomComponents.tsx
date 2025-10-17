'use client'

import { ReactNode } from 'react'
import VideoPlayer from '@/components/VideoPlayer'
import { Separator } from '@/components/ui/separator'
import { Clock, Map } from 'iconoir-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

interface HighlightProps {
  children: React.ReactNode
  color?: 'yellow' | 'blue' | 'green' | 'red'
}

export function Highlight({ children, color = 'yellow' }: HighlightProps) {
  const colorClasses = {
    yellow: 'bg-yellow-200 dark:bg-yellow-800',
    blue: 'bg-blue-200 dark:bg-blue-800',
    green: 'bg-green-200 dark:bg-green-800',
    red: 'bg-red-200 dark:bg-red-800',
  }

  return (
    <span className={`px-2 py-1 rounded ${colorClasses[color]}`}>
      {children}
    </span>
  )
}

interface CalloutProps {
  children: React.ReactNode
  type?: 'info' | 'warning' | 'success' | 'error'
}

export function Callout({ children, type = 'info' }: CalloutProps) {
  const typeClasses = {
    info: 'border-blue-500 bg-blue-50 dark:bg-blue-950',
    warning: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-950',
    success: 'border-green-500 bg-green-50 dark:bg-green-950',
    error: 'border-red-500 bg-red-50 dark:bg-red-950',
  }

  return (
    <div className={`border-l-4 p-4 my-4 ${typeClasses[type]}`}>
      {children}
    </div>
  )
}

interface AnchorProps {
  id: string
  children?: ReactNode
  title?: string
  visible?: boolean
}

export function Anchor({ id, children, title, visible = true }: AnchorProps) {
  if (!visible) {
    return <div id={id} className="scroll-mt-24" />
  }

  return (
    <div id={id} className="font-mono text-md text-tx-primary mb-5 scroll-mt-24 bg-bg-secondary px-2 py-2 rounded">
      # {children}
    </div>
  )
}

interface TitleSectionProps {
  // Accept optional frontmatter props to avoid SSR issues
  title?: string
  subtitle?: string
  date?: string
  year?: string
  published?: string
  location?: string
}

export function TitleSection(props: TitleSectionProps) {
  // Use props directly since frontmatter is injected via MDX rendering
  const frontmatter = props
  
  if (!frontmatter || Object.keys(frontmatter).length === 0) {
    return null
  }

  // Use published, date, or year - whichever is available
  const dateString = frontmatter.published || frontmatter.date || frontmatter.year

  return (
    <section className="mb-4 scroll-mt-24" id="overview">
      {frontmatter.title && (
        <h1 className="text-xl text-tx-primary leading-[2.5rem]">{frontmatter.title}</h1>
      )}
      {frontmatter.subtitle && (
        <h5 className="font-mono text-md text-tx-secondary">{frontmatter.subtitle}</h5>
      )}
      <Separator className="mt-4 mb-4 bg-bd-secondary"/>
      <div className="flex gap-6 font-mono text-tx-tertiary text-xs">
        {dateString && (
          <div className="flex gap-2 items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                  <Clock className="w-4 h-4"/>
              </TooltipTrigger>
              <TooltipContent>
                <p>Published on</p>
              </TooltipContent>
            </Tooltip>
            <span>{dateString}</span>
          </div>
        )}
        {frontmatter.location && (
          <div className="flex gap-2 items-center">
            
            <Tooltip>
              <TooltipTrigger asChild>
                  <Map className="w-4 h-4"/>
              </TooltipTrigger>
              <TooltipContent>
                <p>Created at</p>
              </TooltipContent>
            </Tooltip>
            <span>{frontmatter.location}</span>
          </div>
        )}
      </div>
    </section>
  );
}


const MDXCustomComponents = {
  Highlight,
  Callout,
  Anchor,
  TitleSection,
  VideoPlayer
}

export default MDXCustomComponents
