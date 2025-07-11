import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Clock, BookOpen, User } from 'lucide-react';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import CodeBlock from '../components/CodeBlock';
import TutorialNavigation from '../components/TutorialNavigation';
import { getTutorialBySlug, getAllTutorials, categories } from '../data/tutorials';

const TutorialPage = () => {
  const { category, slug } = useParams();
  const fullSlug = `/tutorials/${category}/${slug}`;
  const tutorial = getTutorialBySlug(fullSlug);
  
  const allTutorials = getAllTutorials();
  const currentIndex = allTutorials.findIndex(t => t.slug === fullSlug);
  const previousTutorial = currentIndex > 0 ? allTutorials[currentIndex - 1] : undefined;
  const nextTutorial = currentIndex < allTutorials.length - 1 ? allTutorials[currentIndex + 1] : undefined;

  useEffect(() => {
    if (tutorial) {
      document.title = `${tutorial.title} - CodeVerse`;
    }
  }, [tutorial]);

  if (!tutorial) {
    return <Navigate to="/404" replace />;
  }

  const categoryInfo = categories.find(c => c.id === tutorial.category);
  const subcategoryInfo = categoryInfo?.subcategories?.find(s => s.id === tutorial.subcategory);

  const breadcrumbItems = [
    { label: 'Tutorials', path: '/tutorials' },
    { label: categoryInfo?.title || tutorial.category, path: `/tutorials/${tutorial.category}` },
  ];

  if (subcategoryInfo) {
    breadcrumbItems.push({ label: subcategoryInfo.title, path: undefined });
  }
  
  breadcrumbItems.push({ label: tutorial.title, path: undefined });

  const estimatedReadTime = Math.ceil(tutorial.content.sections.length * 3);

  return (
    <Layout>
      <article className="px-6 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Tutorial Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
              {tutorial.category.toUpperCase()}
            </span>
            {tutorial.subcategory && (
              <span className="text-sm text-muted-foreground">
                {tutorial.subcategory.replace('-', ' ')}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {tutorial.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-6 max-w-3xl">
            {tutorial.description}
          </p>

          {/* Tutorial metadata */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>~{estimatedReadTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>{tutorial.content.sections.length} section{tutorial.content.sections.length !== 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Beginner friendly</span>
            </div>
          </div>
        </header>

        {/* Tutorial Content */}
        <div className="tutorial-content">
          {tutorial.content.sections.map((section, index) => (
            <section key={section.id} className="mb-12">
              <h2 id={section.id} className="text-2xl md:text-3xl font-bold mb-6 scroll-mt-20">
                {section.title}
              </h2>
              
              <div className="leading-relaxed mb-6">
                {section.content.split('\n\n').map((paragraph, pIndex) => {
                  if (paragraph.trim().startsWith('•')) {
                    // Handle bullet points
                    const items = paragraph.split('\n').filter(item => item.trim().startsWith('•'));
                    return (
                      <ul key={pIndex} className="my-6 space-y-2">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-3"></span>
                            <span>{item.substring(1).trim()}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  
                  if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                    // Handle bold headers
                    const boldText = paragraph.replace(/\*\*/g, '');
                    return (
                      <h4 key={pIndex} className="text-lg font-semibold mt-8 mb-4 text-foreground">
                        {boldText}
                      </h4>
                    );
                  }
                  
                  return (
                    <p key={pIndex} className="mb-4 text-foreground leading-relaxed">
                      {paragraph.split(/(\*\*[^*]+\*\*|\`[^`]+\`)/).map((part, partIndex) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return (
                            <strong key={partIndex} className="font-semibold">
                              {part.slice(2, -2)}
                            </strong>
                          );
                        }
                        if (part.startsWith('`') && part.endsWith('`')) {
                          return (
                            <code key={partIndex} className="code-inline">
                              {part.slice(1, -1)}
                            </code>
                          );
                        }
                        return part;
                      })}
                    </p>
                  );
                })}
              </div>

              {section.codeExample && (
                <CodeBlock
                  code={section.codeExample.code}
                  language={section.codeExample.language}
                  title={section.codeExample.title}
                />
              )}
            </section>
          ))}
        </div>

        {/* Tutorial Navigation */}
        <TutorialNavigation
          currentTutorial={tutorial}
          previousTutorial={previousTutorial}
          nextTutorial={nextTutorial}
        />
      </article>
    </Layout>
  );
};

export default TutorialPage;