import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { SITE_URL } from '../data/seoData';

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  const allItems = [{ name: 'Home', url: '/' }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className="py-3 text-xs text-emerald-200/80"
    >
      <ol
        className="flex items-center flex-wrap gap-1.5 sm:gap-2"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li
              key={index}
              className="flex items-center gap-1.5 sm:gap-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index === 0 ? (
                <Link
                  to={item.url}
                  itemProp="item"
                  className="flex items-center gap-1 hover:text-gold-300 transition-colors"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span itemProp="name">{item.name}</span>
                </Link>
              ) : isLast ? (
                <span
                  className="text-gold-400 font-semibold truncate max-w-[200px] sm:max-w-none"
                  itemProp="name"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.url}
                  itemProp="item"
                  className="hover:text-gold-300 transition-colors truncate max-w-[150px] sm:max-w-none"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}

              <meta itemProp="position" content={String(index + 1)} />

              {!isLast && (
                <ChevronRight className="w-3 h-3 text-emerald-600 shrink-0" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
