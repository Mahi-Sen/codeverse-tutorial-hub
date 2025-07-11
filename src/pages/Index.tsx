import React from 'react';
import { Link } from 'react-router-dom';
import { Code, BookOpen, Search, ArrowRight, Star, Users, Zap } from 'lucide-react';
import Layout from '../components/Layout';
import { categories, getAllTutorials } from '../data/tutorials';

const Index = () => {
  const recentTutorials = getAllTutorials().slice(0, 6);

  return (
    <Layout>
      <div className="px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
              <Code className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome to CodeVerse
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your personal hub for mastering web development. Learn HTML, CSS, JavaScript, and modern frameworks with clear, practical tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tutorials"
              className="btn-primary inline-flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Start Learning
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/tutorials/html/introduction"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Code className="w-5 h-5" />
              HTML Basics
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-xl border border-border bg-card">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast & Clear</h3>
            <p className="text-muted-foreground">
              Skip the fluff. Get straight to practical examples and real-world applications.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl border border-border bg-card">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Well Structured</h3>
            <p className="text-muted-foreground">
              Tutorials are organized logically, building from basics to advanced concepts.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl border border-border bg-card">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy to Find</h3>
            <p className="text-muted-foreground">
              Search through tutorials instantly and bookmark your progress.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Learning Paths</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/tutorials/${category.id}`}
                className="group p-6 rounded-xl border border-border bg-card hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">
                      {category.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Start Learning
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Tutorials */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Recent Tutorials</h2>
            <Link
              to="/tutorials"
              className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentTutorials.map(tutorial => (
              <Link
                key={tutorial.id}
                to={tutorial.slug}
                className="group p-6 rounded-xl border border-border bg-card hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                    {tutorial.category.toUpperCase()}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {tutorial.subcategory?.replace('-', ' ').toLowerCase()}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {tutorial.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Coding?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of developers who have mastered web development with our practical, hands-on tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tutorials/html/introduction"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Code className="w-5 h-5" />
              Start with HTML
            </Link>
            <Link
              to="/tutorials"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Browse All Tutorials
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
