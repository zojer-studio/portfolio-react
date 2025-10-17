'use client'

import { createContext, useContext, ReactNode } from 'react'

export interface FrontmatterData {
  title?: string
  subtitle?: string
  date?: string | Date
  year?: string | number
  published?: string | Date
  location?: string
  thumbnail?: string
  order?: number | string
  visible?: boolean
}

interface FrontmatterContextType {
  frontmatter: FrontmatterData | null
}

const FrontmatterContext = createContext<FrontmatterContextType | undefined>(undefined)

export function useFrontmatter() {
  const context = useContext(FrontmatterContext)
  if (context === undefined) {
    throw new Error('useFrontmatter must be used within a FrontmatterProvider')
  }
  return context
}

interface FrontmatterProviderProps {
  children: ReactNode
  frontmatter: FrontmatterData | null
}

export function FrontmatterProvider({ children, frontmatter }: FrontmatterProviderProps) {
  return (
    <FrontmatterContext.Provider value={{ frontmatter }}>
      {children}
    </FrontmatterContext.Provider>
  )
}
