import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { withBasePath } from '../utils/path';

type CustomLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function CustomLink({ href, className, children }: CustomLinkProps) {
  const pathname = usePathname();
  
  // Process the href to handle basePath
  const processedHref = href.startsWith('http') ? href : withBasePath(href);
  
  // For client-side navigation within the app
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  
  // For external links
  return (
    <a href={processedHref} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
} 