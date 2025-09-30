import * as React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '../ui/sheet';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';

export interface HelpArticle {
  id: string;
  title: string;
  content: React.ReactNode;
  category?: string;
  keywords?: string[];
  icon?: IconName;
}

export interface HelpDrawerProps {
  /**
   * Whether the drawer is open
   */
  open: boolean;

  /**
   * Callback when drawer should close
   */
  onOpenChange: (open: boolean) => void;

  /**
   * Help articles to display
   */
  articles: HelpArticle[];

  /**
   * Drawer title
   */
  title?: string;

  /**
   * Drawer description
   */
  description?: string;

  /**
   * Whether to show search
   */
  searchable?: boolean;

  /**
   * Contact support info
   */
  supportInfo?: {
    email?: string;
    phone?: string;
    chatUrl?: string;
  };

  /**
   * Side of the screen to display drawer
   */
  side?: 'left' | 'right';

  /**
   * Initial article to display
   */
  initialArticleId?: string;
}

/**
 * HelpDrawer component - collapsible help sidebar with searchable articles
 */
export const HelpDrawer = React.forwardRef<HTMLDivElement, HelpDrawerProps>(
  (
    {
      open,
      onOpenChange,
      articles,
      title = 'Help & Support',
      description = 'Find answers and get support',
      searchable = true,
      supportInfo,
      side = 'right',
      initialArticleId,
    },
    ref,
  ) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedArticle, setSelectedArticle] = React.useState<HelpArticle | null>(
      initialArticleId ? articles.find((a) => a.id === initialArticleId) || null : null,
    );

    const filteredArticles = React.useMemo(() => {
      if (!searchQuery.trim()) return articles;

      const query = searchQuery.toLowerCase();
      return articles.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.category?.toLowerCase().includes(query) ||
          article.keywords?.some((keyword) => keyword.toLowerCase().includes(query)),
      );
    }, [articles, searchQuery]);

    const categories = React.useMemo(() => {
      const cats = new Set(articles.map((a) => a.category).filter(Boolean));
      return Array.from(cats) as string[];
    }, [articles]);

    const articlesByCategory = React.useMemo(() => {
      return categories.reduce(
        (acc, category) => {
          acc[category] = filteredArticles.filter((a) => a.category === category);
          return acc;
        },
        {} as Record<string, HelpArticle[]>,
      );
    }, [categories, filteredArticles]);

    const uncategorized = filteredArticles.filter((a) => !a.category);

    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent ref={ref} side={side} className="w-full sm:max-w-xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </SheetHeader>

          <div className="mt-6 space-y-6">
            {/* Search */}
            {searchable && (
              <div className="relative">
                <Icon
                  name={'search' as any}
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--ds-color-text-secondary)]"
                />
                <Input
                  type="search"
                  placeholder="Search help articles..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedArticle(null);
                  }}
                  className="pl-10"
                />
              </div>
            )}

            {/* Article View */}
            {selectedArticle ? (
              <div className="space-y-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedArticle(null)}
                  className="mb-2"
                >
                  <Icon name={'arrow' as any} size={16} className="rotate-180" />
                  Back to articles
                </Button>
                <div>
                  <h3 className="text-lg font-semibold mb-4">{selectedArticle.title}</h3>
                  <div className="prose prose-sm max-w-none text-[var(--ds-color-text-secondary)]">
                    {selectedArticle.content}
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Articles List */}
                {filteredArticles.length === 0 ? (
                  <div className="text-center py-8 text-[var(--ds-color-text-secondary)]">
                    <Icon name={'search' as any} size={48} className="mx-auto mb-3 opacity-40" />
                    <p>No articles found matching your search.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {categories.map((category) => (
                      <div key={category}>
                        <h3 className="text-sm font-semibold text-[var(--ds-color-text-secondary)] uppercase tracking-wide mb-3">
                          {category}
                        </h3>
                        <div className="space-y-2">
                          {articlesByCategory[category].map((article) => (
                            <button
                              key={article.id}
                              onClick={() => setSelectedArticle(article)}
                              className="w-full text-left p-3 rounded-lg border border-[var(--ds-color-neutral-300)] hover:border-[var(--ds-color-blue-500)] hover:bg-[var(--ds-color-blue-50)] transition-colors"
                            >
                              <div className="flex items-start gap-3">
                                {article.icon && (
                                  <Icon
                                    name={article.icon as any}
                                    size={20}
                                    className="flex-shrink-0 mt-0.5 text-[var(--ds-color-text-secondary)]"
                                  />
                                )}
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-[var(--ds-color-text-primary)]">
                                    {article.title}
                                  </p>
                                </div>
                                <Icon
                                  name={'arrow' as any}
                                  size={16}
                                  className="flex-shrink-0 text-[var(--ds-color-text-secondary)]"
                                />
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}

                    {uncategorized.length > 0 && (
                      <div>
                        {categories.length > 0 && (
                          <h3 className="text-sm font-semibold text-[var(--ds-color-text-secondary)] uppercase tracking-wide mb-3">
                            Other
                          </h3>
                        )}
                        <div className="space-y-2">
                          {uncategorized.map((article) => (
                            <button
                              key={article.id}
                              onClick={() => setSelectedArticle(article)}
                              className="w-full text-left p-3 rounded-lg border border-[var(--ds-color-neutral-300)] hover:border-[var(--ds-color-blue-500)] hover:bg-[var(--ds-color-blue-50)] transition-colors"
                            >
                              <div className="flex items-start gap-3">
                                {article.icon && (
                                  <Icon
                                    name={article.icon as any}
                                    size={20}
                                    className="flex-shrink-0 mt-0.5 text-[var(--ds-color-text-secondary)]"
                                  />
                                )}
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-[var(--ds-color-text-primary)]">
                                    {article.title}
                                  </p>
                                </div>
                                <Icon
                                  name={'arrow' as any}
                                  size={16}
                                  className="flex-shrink-0 text-[var(--ds-color-text-secondary)]"
                                />
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}

            {/* Support Info */}
            {supportInfo && !selectedArticle && (
              <div className="pt-6 border-t border-[var(--ds-color-neutral-300)]">
                <h3 className="text-sm font-semibold mb-3">Need More Help?</h3>
                <div className="space-y-2">
                  {supportInfo.email && (
                    <a
                      href={`mailto:${supportInfo.email}`}
                      className="flex items-center gap-2 text-sm text-[var(--ds-color-blue-600)] hover:text-[var(--ds-color-blue-700)] hover:underline"
                    >
                      <Icon name={'mail' as any} size={16} />
                      {supportInfo.email}
                    </a>
                  )}
                  {supportInfo.phone && (
                    <a
                      href={`tel:${supportInfo.phone}`}
                      className="flex items-center gap-2 text-sm text-[var(--ds-color-blue-600)] hover:text-[var(--ds-color-blue-700)] hover:underline"
                    >
                      <Icon name={'phone' as any} size={16} />
                      {supportInfo.phone}
                    </a>
                  )}
                  {supportInfo.chatUrl && (
                    <a
                      href={supportInfo.chatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--ds-color-blue-600)] hover:text-[var(--ds-color-blue-700)] hover:underline"
                    >
                      <Icon name={'message' as any} size={16} />
                      Start Live Chat
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    );
  },
);

HelpDrawer.displayName = 'HelpDrawer';

/**
 * Hook for managing help drawer state
 */
export function useHelpDrawer() {
  const [open, setOpen] = React.useState(false);
  const [initialArticleId, setInitialArticleId] = React.useState<string | undefined>();

  const openHelp = React.useCallback((articleId?: string) => {
    setInitialArticleId(articleId);
    setOpen(true);
  }, []);

  const closeHelp = React.useCallback(() => {
    setOpen(false);
    setInitialArticleId(undefined);
  }, []);

  return {
    open,
    initialArticleId,
    openHelp,
    closeHelp,
    setOpen,
  };
}
