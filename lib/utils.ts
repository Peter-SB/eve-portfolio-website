import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prepend basePath to asset paths for GitHub Pages deployment
 * Only prepends if path starts with /
 */
export function assetPath(path: string): string {
  if (!path.startsWith('/')) return path
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return basePath ? `${basePath}${path}` : path
}
