'use client'

import { Sidebar, SidebarNav } from '@/components/Sidebar'
import { StickyCard, StickyCardMask } from '@/components/StickyCard'
import { useMDXContent } from '@/hooks/useMDXContent'

export default function MarkdownDemo() {
  const { renderedContent, loading, error } = useMDXContent('/demos/markdown/markdownconverter.mdx')

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading content...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-600">
          <p>Error: {error}</p>
        </div>
      </div>
    )
  }

  if (!renderedContent) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>No content available</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-start-3 md:col-span-8 flex flex-col mt-4">
        <SidebarNav href={'/?tab=demos'} breadcrumb={'demos'} page={'markdown'}/>
              
        <main className="md:col-span-8">
        <StickyCardMask />
        <StickyCard>
          {/* <StickyCardNav href="/" destination="work" page ={params.slug} className="sticky top-6" /> */}
          <article className="max-w-4xl mx-auto px-8 py-8">
            {renderedContent.content}
          </article>
        </StickyCard>
      </main>
      </div>
    </div>
  )
}