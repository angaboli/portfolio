'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiChevronRight, HiHome } from 'react-icons/hi';

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // Don't show breadcrumb on homepage
  if (pathname === '/') return null;
  
  // Create breadcrumb items based on the current path
  const pathSegments = pathname.split('/').filter(segment => segment);
  
  // Generate breadcrumb items with proper capitalization and formatting
  const breadcrumbItems = pathSegments.map((segment, index) => {
    // Check if it's a dynamic route with ID
    const isNumeric = !isNaN(segment);
    
    // Create the path for this breadcrumb item
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    
    // Format the label (capitalize first letter)
    let label = segment;
    if (!isNumeric) {
      label = segment.charAt(0).toUpperCase() + segment.slice(1);
    } else {
      // For numeric IDs, try to get a better label (e.g., post title)
      label = `Article ${segment}`;
    }
    
    return { href, label, isLast: index === pathSegments.length - 1 };
  });

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3">
      <ol className="flex items-center space-x-1 text-sm text-gray-500">
        <li>
          <Link href="/" className="flex items-center hover:text-accent transition-colors">
            <HiHome className="w-4 h-4 mr-1" />
            <span>Accueil</span>
          </Link>
        </li>
        
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <HiChevronRight className="w-4 h-4 mx-1" />
            {item.isLast ? (
              <span className="font-medium text-accent">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-accent transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
