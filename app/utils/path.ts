/**
 * Utility functions for handling paths with basePath for GitHub Pages
 */

// Define the window.env interface
declare global {
  interface Window {
    env?: {
      NEXT_PUBLIC_BASE_PATH?: string;
    };
  }
}

// Get the base path from environment variable or window.env in browser
export function getBasePath(): string {
  if (typeof window !== 'undefined' && window.env?.NEXT_PUBLIC_BASE_PATH) {
    return window.env.NEXT_PUBLIC_BASE_PATH;
  }
  
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }
  
  return process.env.NODE_ENV === 'production' ? '/mathassessment' : '';
}

// Add base path to a path if needed
export function withBasePath(path: string): string {
  const basePath = getBasePath();
  
  // If path already starts with base path or is an external URL, return it as is
  if (path.startsWith(basePath) || path.startsWith('http') || path.startsWith('/api/')) {
    return path;
  }
  
  // Make sure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Combine base path with normalized path
  return `${basePath}${normalizedPath}`;
} 