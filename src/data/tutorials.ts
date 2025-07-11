// Tutorial data structure for CodeVerse
export interface Tutorial {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  subcategory?: string;
  order: number;
  content: {
    sections: TutorialSection[];
  };
}

export interface TutorialSection {
  id: string;
  title: string;
  content: string;
  codeExample?: CodeExample;
}

export interface CodeExample {
  language: string;
  code: string;
  title?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id: string;
  title: string;
  description: string;
}

// Tutorial categories and structure
export const categories: Category[] = [
  {
    id: 'html',
    title: 'HTML',
    description: 'Learn the fundamentals of HTML markup language',
    icon: 'Code',
    subcategories: [
      {
        id: 'basics',
        title: 'HTML Basics',
        description: 'Core HTML concepts and structure'
      },
      {
        id: 'elements',
        title: 'HTML Elements',
        description: 'Working with different HTML elements'
      },
      {
        id: 'forms',
        title: 'Forms & Input',
        description: 'Creating interactive forms'
      },
      {
        id: 'semantic',
        title: 'Semantic HTML',
        description: 'Writing meaningful, accessible HTML'
      }
    ]
  },

// =============================================================================================
  {
    id: 'javascript', // URL-friendly identifier
    title: 'JavaScript', // Display name
    description: 'Learn client-side and server-side JavaScript',
    icon: 'Code', // Lucide icon name (you can choose a different one)
    subcategories: [
      {
        id: 'basics',
        title: 'JavaScript Basics',
        description: 'Fundamental JavaScript concepts'
      },
      {
        id: 'asynchronous',
        title: 'Asynchronous JavaScript',
        description: 'Working with async operations, Promises, and more'
      },
      {
        id: 'dom-manipulation',
        title: 'DOM Manipulation',
        description: 'Interacting with the Document Object Model'
      }
      // ... other JavaScript subcategories
    ]
  },
];

// HTML Tutorial content
export const tutorials: Tutorial[] = [
  {
    id: 'html-introduction',
    title: 'Introduction to HTML',
    description: 'Learn what HTML is and why it\'s fundamental to web development',
    slug: '/tutorials/html/introduction',
    category: 'html',
    subcategory: 'basics',
    order: 1,
    content: {
      sections: [
        {
          id: 'what-is-html',
          title: 'What is HTML?',
          content: `HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure and content of web pages using a system of tags and attributes.

HTML is not a programming language – it's a markup language that tells the browser how to structure and display content. Think of it as the skeleton of a web page, providing the basic structure that other technologies like CSS and JavaScript can enhance.`,
        },
        {
          id: 'why-learn-html',
          title: 'Why Learn HTML?',
          content: `Learning HTML is essential for anyone interested in web development because:

• **Foundation of the Web**: Every website uses HTML as its base structure
• **Easy to Learn**: HTML has a simple, logical syntax that beginners can master quickly
• **Essential Skill**: Required for frontend development, web design, and digital marketing
• **Career Opportunities**: Opens doors to web development, UI/UX design, and technical writing
• **Creative Control**: Allows you to build and customize websites from scratch

Even if you use website builders or content management systems, understanding HTML gives you more control and flexibility.`,
        },
        {
          id: 'basic-example',
          title: 'Your First HTML Document',
          content: `Here's a simple HTML document that demonstrates the basic structure:`,
          codeExample: {
            language: 'html',
            title: 'Basic HTML Document',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my first paragraph of text.</p>
    <p>HTML is <strong>amazing</strong> and <em>easy to learn</em>!</p>
</body>
</html>`
          }
        }
      ]
    }
  },
  {
    id: 'html-how-it-works',
    title: 'How HTML Works',
    description: 'Understand how browsers interpret HTML and render web pages',
    slug: '/tutorials/html/how-it-works',
    category: 'html',
    subcategory: 'basics',
    order: 2,
    content: {
      sections: [
        {
          id: 'browser-process',
          title: 'How Browsers Process HTML',
          content: `When you visit a website, here's what happens behind the scenes:

1. **Request**: Your browser sends a request to the web server
2. **Download**: The server sends back HTML files
3. **Parse**: The browser reads and interprets the HTML code
4. **Render**: The browser displays the content according to HTML structure
5. **Style**: CSS styles are applied to make it look beautiful
6. **Interact**: JavaScript adds interactivity and dynamic behavior

The browser reads HTML from top to bottom, building a Document Object Model (DOM) that represents the structure of your page.`,
        },
        {
          id: 'html-css-js',
          title: 'HTML, CSS, and JavaScript Relationship',
          content: `Web development relies on three core technologies working together:

**HTML (Structure)**: Defines the content and structure
- Headings, paragraphs, lists, images, links
- Like the skeleton or framework of a building

**CSS (Styling)**: Controls the appearance and layout
- Colors, fonts, spacing, animations
- Like the paint, wallpaper, and interior design

**JavaScript (Behavior)**: Adds interactivity and dynamic features
- Form validation, animations, user interactions
- Like the electrical systems and smart features

Think of building a house: HTML is the frame, CSS is the decoration, and JavaScript is the smart home technology.`,
        },
        {
          id: 'development-workflow',
          title: 'Development Workflow',
          content: `A typical HTML development workflow involves:

1. **Plan**: Sketch out your website structure and content
2. **Write HTML**: Create the basic structure and content
3. **Style with CSS**: Add visual design and layout
4. **Add Interactivity**: Use JavaScript for dynamic features
5. **Test**: Check your site in different browsers and devices
6. **Deploy**: Upload your files to a web server

You'll often cycle through these steps multiple times as you refine and improve your website.`,
          codeExample: {
            language: 'html',
            title: 'HTML File Structure',
            code: `project-folder/
├── index.html          <!-- Main HTML file -->
├── about.html          <!-- About page -->
├── contact.html        <!-- Contact page -->
├── css/
│   └── styles.css      <!-- CSS styling -->
├── js/
│   └── script.js       <!-- JavaScript -->
└── images/
    ├── logo.png        <!-- Images -->
    └── banner.jpg`
          }
        }
      ]
    }
  },
  {
    id: 'html-tools',
    title: 'Installing Tools for HTML',
    description: 'Set up your development environment with the right tools',
    slug: '/tutorials/html/tools',
    category: 'html',
    subcategory: 'basics',
    order: 3,
    content: {
      sections: [
        {
          id: 'text-editors',
          title: 'Choose a Text Editor',
          content: `You need a good text editor to write HTML efficiently. Here are the best options:

**Visual Studio Code (Recommended)**
- Free, powerful, and widely used
- Excellent HTML support with syntax highlighting
- Built-in live preview and debugging tools
- Huge library of helpful extensions

**Other Great Options:**
- **Sublime Text**: Fast and lightweight
- **Atom**: Highly customizable (discontinued but still usable)
- **WebStorm**: Full-featured IDE (paid)
- **Notepad++**: Simple and fast (Windows only)

For beginners, Visual Studio Code is the best choice because it's free, user-friendly, and has excellent documentation.`,
        },
        {
          id: 'browser-setup',
          title: 'Browser Development Tools',
          content: `Modern browsers include powerful development tools. Here's what you need:

**Primary Browser for Development:**
- **Chrome**: Excellent DevTools, most widely used
- **Firefox**: Great for accessibility testing
- **Safari**: Essential for Mac/iOS testing
- **Edge**: Good for Windows compatibility testing

**Essential Browser Extensions:**
- **Live Server**: Auto-refresh your page when you save files
- **Web Developer**: Additional debugging tools
- **Accessibility Inspector**: Check accessibility compliance

**Developer Tools Features:**
- Inspect HTML elements
- Edit styles in real-time
- Monitor network requests
- Debug JavaScript
- Test responsive design`,
          codeExample: {
            language: 'html',
            title: 'Testing Your Setup',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testing My Setup</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        h1 { color: #2563eb; }
        .success { color: #16a34a; font-weight: bold; }
    </style>
</head>
<body>
    <h1>Development Environment Test</h1>
    <p class="success">✅ If you can see this page, your setup is working!</p>
    <p>Right-click and select "Inspect Element" to open Developer Tools.</p>
</body>
</html>`
          }
        },
        {
          id: 'file-organization',
          title: 'File Organization Best Practices',
          content: `Organizing your project files properly is crucial for maintainability:

**Folder Structure:**
- Keep HTML files in the root directory
- Create separate folders for CSS, JavaScript, and images
- Use descriptive, lowercase filenames with hyphens
- Always include an 'index.html' as your main page

**Naming Conventions:**
- Use lowercase letters only
- Replace spaces with hyphens (-)
- Be descriptive: 'contact-form.html' not 'cf.html'
- Avoid special characters and spaces

**File Management Tips:**
- Keep related files together
- Use consistent naming patterns
- Create a backup system
- Comment your code for future reference`,
        }
      ]
    }
  },
  {
    id: 'html-structure',
    title: 'Structure of an HTML Page',
    description: 'Learn the essential components that make up every HTML document',
    slug: '/tutorials/html/structure',
    category: 'html',
    subcategory: 'basics',
    order: 4,
    content: {
      sections: [
        {
          id: 'doctype-declaration',
          title: 'DOCTYPE Declaration',
          content: `Every HTML document must start with a DOCTYPE declaration. This tells the browser which version of HTML you're using and ensures it renders your page correctly.

The modern HTML5 DOCTYPE is simple and should always be the first line of your HTML file:`,
          codeExample: {
            language: 'html',
            title: 'DOCTYPE Declaration',
            code: `<!DOCTYPE html>`
          }
        },
        {
          id: 'html-element',
          title: 'The HTML Element',
          content: `The <html> element is the root element that wraps all content on the page. It should include the 'lang' attribute to specify the language of the document for accessibility and SEO.`,
          codeExample: {
            language: 'html',
            title: 'HTML Root Element',
            code: `<html lang="en">
    <!-- All other elements go inside here -->
</html>`
          }
        },
        {
          id: 'head-section',
          title: 'The Head Section',
          content: `The <head> element contains metadata about the document that isn't displayed on the page but is essential for browsers and search engines:

• **Character encoding** (UTF-8 for international characters)
• **Viewport settings** (for responsive design)
• **Title** (appears in browser tab and search results)
• **Meta descriptions** (for SEO)
• **Links to external files** (CSS, fonts, icons)`,
          codeExample: {
            language: 'html',
            title: 'Complete Head Section',
            code: `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn HTML fundamentals with CodeVerse">
    <meta name="keywords" content="HTML, tutorial, web development">
    <meta name="author" content="CodeVerse">
    
    <title>HTML Structure Tutorial - CodeVerse</title>
    
    <!-- External CSS -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>`
          }
        },
        {
          id: 'body-section',
          title: 'The Body Section',
          content: `The <body> element contains all the visible content of your web page. This is where you'll place headings, paragraphs, images, links, and all other content that users will see and interact with.

The body should be structured logically with semantic elements that describe the content's purpose, not just its appearance.`,
          codeExample: {
            language: 'html',
            title: 'Well-Structured Body',
            code: `<body>
    <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/tutorials">Tutorials</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <h1>Welcome to HTML</h1>
            <p>This is the main content area.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 CodeVerse. All rights reserved.</p>
    </footer>
</body>`
          }
        }
      ]
    }
  },
  {
    id: 'html-tags',
    title: 'HTML Tags',
    description: 'Master the building blocks of HTML with tags and their syntax',
    slug: '/tutorials/html/tags',
    category: 'html',
    subcategory: 'elements',
    order: 5,
    content: {
      sections: [
        {
          id: 'what-are-tags',
          title: 'What Are HTML Tags?',
          content: `HTML tags are the building blocks of HTML. They are keywords enclosed in angle brackets that tell the browser how to structure and display content.

Tags work in pairs:
• **Opening tag**: \`<tagname>\` - starts the element
• **Closing tag**: \`</tagname>\` - ends the element (note the forward slash)
• **Content**: appears between the opening and closing tags

Some tags are self-closing and don't need a closing tag.`,
          codeExample: {
            language: 'html',
            title: 'Basic Tag Structure',
            code: `<!-- Container tags (need closing tag) -->
<h1>This is a heading</h1>
<p>This is a paragraph</p>
<div>This is a division</div>

<!-- Self-closing tags (no closing tag needed) -->
<img src="image.jpg" alt="Description">
<br>
<hr>`
          }
        },
        {
          id: 'common-tags',
          title: 'Most Common HTML Tags',
          content: `Here are the essential HTML tags you'll use most often:

**Text Content:**
• \`<h1>\` to \`<h6>\` - Headings (largest to smallest)
• \`<p>\` - Paragraphs
• \`<span>\` - Inline text container
• \`<div>\` - Block-level container

**Text Formatting:**
• \`<strong>\` - Important text (bold)
• \`<em>\` - Emphasized text (italic)
• \`<u>\` - Underlined text
• \`<mark>\` - Highlighted text

**Lists:**
• \`<ul>\` - Unordered list (bullets)
• \`<ol>\` - Ordered list (numbers)
• \`<li>\` - List item

**Links and Media:**
• \`<a>\` - Links
• \`<img>\` - Images
• \`<video>\` - Video content
• \`<audio>\` - Audio content`,
          codeExample: {
            language: 'html',
            title: 'Common Tags in Action',
            code: `<h1>Welcome to My Blog</h1>
<h2>Today's Topic: HTML Tags</h2>

<p>Learning HTML is <strong>essential</strong> for web development.</p>
<p>You can <em>emphasize</em> important concepts with these tags.</p>

<h3>What You'll Learn:</h3>
<ul>
    <li>How to structure content</li>
    <li>How to format text</li>
    <li>How to create lists</li>
</ul>

<p>Visit <a href="https://codeverse.dev">CodeVerse</a> for more tutorials.</p>

<img src="html-logo.png" alt="HTML5 Logo">`
          }
        },
        {
          id: 'nested-tags',
          title: 'Nesting Tags Properly',
          content: `HTML tags can be nested inside each other, but they must be properly nested. The last tag opened should be the first tag closed.

**Correct Nesting Rules:**
• Tags must be closed in reverse order of opening
• Inner tags must be completely contained within outer tags
• Overlapping tags will cause rendering issues

**Good Practice:**
• Use proper indentation to visualize nesting
• Close tags immediately after opening when possible
• Validate your HTML to catch nesting errors`,
          codeExample: {
            language: 'html',
            title: 'Proper Tag Nesting',
            code: `<!-- ✅ CORRECT: Proper nesting -->
<div>
    <h2>Article Title</h2>
    <p>This paragraph contains <strong>bold text</strong> and <em>italic text</em>.</p>
    <ul>
        <li>First item</li>
        <li>Second item with <a href="#">a link</a></li>
    </ul>
</div>

<!-- ❌ INCORRECT: Improper nesting -->
<p>This is <strong>bold and <em>italic</strong> text</em>.</p>

<!-- ✅ CORRECT: Proper nesting -->
<p>This is <strong>bold and <em>italic</em></strong> text.</p>`
          }
        }
      ]
    }
  },
  {
    id: 'html-elements',
    title: 'HTML Elements',
    description: 'Understand the difference between tags and elements, and how they work together',
    slug: '/tutorials/html/elements',
    category: 'html',
    subcategory: 'elements',
    order: 6,
    content: {
      sections: [
        {
          id: 'tags-vs-elements',
          title: 'Tags vs Elements: What\'s the Difference?',
          content: `While often used interchangeably, tags and elements are technically different:

**HTML Tag**: The markup code itself - the angle brackets and tag name
\`<p>\` or \`</p>\` are tags

**HTML Element**: The complete structure including opening tag, content, and closing tag
\`<p>Hello World</p>\` is an element

**Think of it this way:**
• Tags are like the wrapping paper
• Elements are the complete package (wrapping + contents)
• The content is what goes inside

Understanding this distinction helps you communicate more precisely about HTML structure.`,
          codeExample: {
            language: 'html',
            title: 'Tags vs Elements',
            code: `<!-- These are TAGS -->
<h1>    </h1>
<p>     </p>
<div>   </div>

<!-- These are ELEMENTS (complete with content) -->
<h1>Welcome to CodeVerse</h1>
<p>This paragraph contains text content.</p>
<div>
    <p>This div element contains other elements.</p>
</div>`
          }
        },
        {
          id: 'block-vs-inline',
          title: 'Block vs Inline Elements',
          content: `HTML elements are categorized into two main types based on how they display:

**Block Elements:**
• Take up the full width available
• Start on a new line
• Have top and bottom margins
• Can contain other block and inline elements
• Examples: \`<div>\`, \`<p>\`, \`<h1>\`, \`<section>\`

**Inline Elements:**
• Only take up as much width as needed
• Stay on the same line with other inline elements
• No top/bottom margins (only left/right)
• Can only contain other inline elements
• Examples: \`<span>\`, \`<a>\`, \`<strong>\`, \`<em>\`

This behavior can be changed with CSS, but understanding the default behavior is important for proper HTML structure.`,
          codeExample: {
            language: 'html',
            title: 'Block vs Inline Examples',
            code: `<!-- Block elements (each takes full width, new line) -->
<h1>This heading takes the full width</h1>
<p>This paragraph also takes the full width</p>
<div>This div takes the full width too</div>

<!-- Inline elements (stay on same line) -->
<p>
    This paragraph contains 
    <strong>bold text</strong> and 
    <em>italic text</em> and 
    <a href="#">a link</a>
    all on the same line.
</p>

<!-- Mixed: block containing inline elements -->
<div>
    <span>Inline span</span>
    <strong>Bold text</strong>
    <a href="#">Link</a>
</div>`
          }
        },
        {
          id: 'semantic-elements',
          title: 'Semantic vs Non-Semantic Elements',
          content: `Semantic elements clearly describe their meaning and purpose, while non-semantic elements don't provide information about their content.

**Semantic Elements (HTML5):**
• \`<header>\` - Page or section header
• \`<nav>\` - Navigation links
• \`<main>\` - Main content area
• \`<article>\` - Independent content
• \`<section>\` - Themed grouping of content
• \`<aside>\` - Sidebar content
• \`<footer>\` - Page or section footer

**Non-Semantic Elements:**
• \`<div>\` - Generic block container
• \`<span>\` - Generic inline container

**Why Use Semantic Elements?**
• Better accessibility for screen readers
• Improved SEO rankings
• Cleaner, more readable code
• Better structure for CSS styling`,
          codeExample: {
            language: 'html',
            title: 'Semantic HTML Structure',
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <h2>Article Title</h2>
            <p>Article content goes here...</p>
        </article>
        
        <aside>
            <h3>Related Links</h3>
            <ul>
                <li><a href="#">Related Topic 1</a></li>
                <li><a href="#">Related Topic 2</a></li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>`
          }
        }
      ]
    }
  },


  // ================================================================================================
  {
    id: 'js-ajax', // Unique identifier
    title: 'Introduction to AJAX',
    description: 'Learn how to make asynchronous requests with JavaScript',
    slug: '/tutorials/javascript/ajax', // URL path
    category: 'javascript', // Must match category id
    subcategory: 'asynchronous', // Must match subcategory id
    order: 10, // Position in sequence (choose an appropriate number)
    content: {
      sections: [
        {
          id: 'what-is-ajax',
          title: 'What is AJAX?',
          content: `AJAX stands for Asynchronous JavaScript and XML. It's a technique used to create asynchronous web applications.
          
Using AJAX, web applications can send and retrieve data from a server asynchronously in the background without interfering with the display and behavior of the existing page.`,
        },
        {
          id: 'how-it-works',
          title: 'How AJAX Works (Basic Idea)',
          content: `Instead of a full page reload, the browser uses the \`XMLHttpRequest\` object (or the newer \`fetch\` API) to send and receive data from a server.
          
When the data is received, JavaScript is used to update parts of the current web page dynamically.`,
          codeExample: {
            language: 'javascript',
            title: 'Basic Fetch API Example',
            code: `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Process your data here
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });`
          }
        },
        // Add more sections on XMLHttpRequest, Promises, async/await with fetch, handling different data types, etc.
      ]
    }
  },

  // Modals Tutorial
  {
    id: 'js-modals', // Unique identifier
    title: 'Working with Modals',
    description: 'Create interactive modal dialogs using JavaScript',
    slug: '/tutorials/javascript/modals', // URL path
    category: 'javascript', // Must match category id
    subcategory: 'dom-manipulation', // Must match subcategory id
    order: 20, // Position in sequence (choose an appropriate number, greater than the AJAX tutorial if sequential)
    content: {
      sections: [
        {
          id: 'what-are-modals',
          title: 'What are Modals?',
          content: `Modal dialogs (or simply "modals") are windows that appear on top of the current page content, often with a dimmed background overlay.
          
They are used to grab the user's attention and require interaction before the user can return to the main content.`,
        },
        {
          id: 'basic-modal-structure',
          title: 'HTML Structure',
          content: `A typical modal involves a container for the overlay and the modal content itself.
          
\`\`\`html
<div id="modal-overlay" style="display: none;"></div>
<div id="modal" style="display: none;">
  <div class="modal-content">
    <h2>Modal Title</h2>
    <p>This is the content of the modal.</p>
    <button id="close-modal">Close</button>
  </div>
</div>
\`\`\`
`, // Using triple backticks for a larger HTML block
        },
        {
          id: 'opening-closing-modal',
          title: 'Opening and Closing with JavaScript',
          content: `We can use JavaScript to change the display style of the modal and overlay elements to show or hide them.`,
          codeExample: {
            language: 'javascript',
            title: 'Show/Hide Modal Functions',
            code: `const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');

function openModal() {
  modalOverlay.style.display = 'block';
  modal.style.display = 'block';
}

function closeModal() {
  modalOverlay.style.display = 'none';
  modal.style.display = 'none';
}

// Example usage:
// document.getElementById('open-modal-button').addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal); // Close if clicking outside modal`
          }
        },
        // Add more sections on styling modals with CSS, accessibility considerations, using libraries, etc.
      ]
    }
  },
];

// Helper functions
export const getTutorialBySlug = (slug: string): Tutorial | undefined => {
  return tutorials.find(tutorial => tutorial.slug === slug);
};

export const getTutorialsByCategory = (categoryId: string): Tutorial[] => {
  return tutorials.filter(tutorial => tutorial.category === categoryId)
    .sort((a, b) => a.order - b.order);
};

export const getTutorialsBySubcategory = (categoryId: string, subcategoryId: string): Tutorial[] => {
  return tutorials.filter(tutorial => 
    tutorial.category === categoryId && tutorial.subcategory === subcategoryId
  ).sort((a, b) => a.order - b.order);
};

export const getAllTutorials = (): Tutorial[] => {
  return tutorials.sort((a, b) => a.order - b.order);
};
