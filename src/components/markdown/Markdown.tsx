import clsx from 'clsx'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'

// import 'katex/dist/katex.min.css'

export type MarkdownProps = {
  markdown: string
  className?: string
}

export const Markdown = ({ markdown, className }: MarkdownProps) => (
  <div className={clsx('break-words', className)}>
    <ReactMarkdown
      components={{
        // Custom components matching the MDX styling
        h1: (props: any) => <h1 className="text-xl text-tx-primary" {...props} />,
        h2: (props: any) => <h2 className="text-lg text-tx-primary mb-2" {...props} />,
        h3: (props: any) => <h3 className="font-mono text-md text-tx-primary border-b-2 border-dashed border-ic-disabled pb-2 mt-8" {...props}/>,
        h4: (props: any) => <h4 className="text-md text-tx-primary mb-3" {...props} />,
        h5: (props: any) => <h5 className="font-mono text-md text-tx-tertiary pb-2" {...props} />,
        h6: (props: any) => <h6 className="text-sm text-tx-tertiary pt-1" {...props} />,
        p:  (props: any) => <p  className="text-md py-4" {...props} />,
        code: (props: any) => (
          <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props} />
        ),
        pre: (props: any) => (
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
        ),
        blockquote: (props: any) => (
          <blockquote className="border-l-2 border-ic-brand bg-bg-disabled px-6 text-md italic text-tx-secondary" {...props} />
        ),
        ul: (props: any) => <ul className="list-disc text-md pl-8 pb-4" {...props} />,
        ol: (props: any) => <ol className="list-decimal text-md pl-8 pb-4" {...props} />,
        li: (props: any) => <li className="mb-1" {...props} />,
        a: (props: any) => (
          <a 
            className="text-blue-600 dark:text-blue-400 hover:underline" 
            target="_blank" 
            rel="noopener noreferrer" 
            {...props} 
          />
        ),
        em: (props: any) => <em className="mb-4" {...props} />,
        strong: (props: any) => <strong className="mb-4" {...props} />,
        hr: (props: any) => <hr className="my-16" {...props} />,
        img: (props: any) => (
          <Image 
            className="border my-4" 
            width={800} 
            height={600} 
            alt={props.alt || "Image"} 
            src={props.src || ''}
            {...props} 
          />
        ),
      }}
      remarkPlugins={[remarkGfm]}
    >
      {markdown}
    </ReactMarkdown>
  </div>
)
