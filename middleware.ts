import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip API routes, _next, and static files
  if (
    pathname.startsWith('/api') || 
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }
  
  // Handle base path for GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/mathassessment' : '';
  
  // Ensure trailing slash for proper asset resolution
  if (!pathname.endsWith('/') && !pathname.includes('.')) {
    const url = request.nextUrl.clone();
    url.pathname = `${pathname}/`;
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
} 