import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import { categories, getAllTutorials } from '../data/tutorials';

const TutorialsPage = () => {
  const allTutorials = getAllTutorials();

  return (
    <Layout>
      <div className="px-6 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Tutorials' }
          ]} 
        />

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">All Tutorials</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore our comprehensive collection of web development tutorials. Start with the basics and work your way up to advanced concepts.
          </p>
        </div>

        {/* Categories Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Learning Paths</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => {
              const categoryTutorials = allTutorials.filter(t => t.category === category.id);
              
              return (
                <div key={category.id} className="p-6 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold text-primary-foreground">
                        {category.title.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {categoryTutorials.length} tutorial{categoryTutorials.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>

                  {/* Subcategories */}
                  {category.subcategories && (
                    <div className="space-y-2 mb-4">
                      {category.subcategories.map(subcategory => {
                        const subcategoryTutorials = categoryTutorials.filter(t => t.subcategory === subcategory.id);
                        
                        return (
                          <div key={subcategory.id} className="text-sm">
                            <span className="font-medium">{subcategory.title}:</span>
                            <span className="text-muted-foreground ml-1">
                              {subcategoryTutorials.length} tutorial{subcategoryTutorials.length !== 1 ? 's' : ''}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <Link
                    to={categoryTutorials[0]?.slug || '#'}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
                  >
                    Start Learning
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Tutorials List */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Tutorials</h2>
          <div className="space-y-4">
            {allTutorials.map(tutorial => (
              <Link
                key={tutorial.id}
                to={tutorial.slug}
                className="group block p-6 rounded-xl border border-border bg-card hover:bg-muted transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                        {tutorial.category.toUpperCase()}
                      </span>
                      {tutorial.subcategory && (
                        <span className="text-xs text-muted-foreground">
                          {tutorial.subcategory.replace('-', ' ')}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-3">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{tutorial.content.sections.length} section{tutorial.content.sections.length !== 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>~{Math.ceil(tutorial.content.sections.length * 3)} min read</span>
                      </div>
                    </div>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-4 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TutorialsPage;