export interface BlogPost {
  id: string;
  title: string;
  excerpt?: string;
  date: string;
  readTime: string;
  category: string;
  gradient: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'optimistic-ui-updates',
    title: 'Mastering Optimistic UI Updates in React',
    excerpt: 'Learn how to implement optimistic updates to create lightning-fast user experiences that feel instant, even before server responses arrive.',
    date: 'November 20, 2024',
    readTime: '8 min read',
    category: 'React Patterns',
    gradient: 'from-blue-500 to-cyan-500',
    tags: ['React', 'UX', 'State Management', 'Performance'],
    content: `
## Introduction

Optimistic UI updates are a powerful pattern for creating responsive, fast-feeling applications. Instead of waiting for server confirmation before updating the UI, we immediately show the user what they expect to see, then reconcile with the server response later.

## Why Optimistic Updates?

Traditional request-response flows feel slow:

1. User clicks "Like" button
2. Show loading spinner
3. Wait for server response (100-500ms)
4. Update UI

With optimistic updates:

1. User clicks "Like" button
2. **Immediately** show liked state
3. Send request in background
4. Reconcile if needed

This creates a perception of instant response, dramatically improving user experience.

## Implementation with React Query

React Query makes optimistic updates straightforward:

\`\`\`typescript
import { useMutation, useQueryClient } from '@tanstack/react-query';

function LikeButton({ postId, isLiked }) {
  const queryClient = useQueryClient();
  
  const likeMutation = useMutation({
    mutationFn: (id) => api.likePost(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries(['post', id]);
      const previousPost = queryClient.getQueryData(['post', id]);
      
      queryClient.setQueryData(['post', id], (old) => ({
        ...old,
        isLiked: true,
        likes: old.likes + 1
      }));
      
      return { previousPost };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['post', id], context.previousPost);
    },
    onSettled: (id) => {
      queryClient.invalidateQueries(['post', id]);
    }
  });
  
  return (
    <button onClick={() => likeMutation.mutate(postId)}>
      {isLiked ? '❤️' : '🤍'} {likes}
    </button>
  );
}
\`\`\`

## Best Practices

### 1. Always Have a Rollback Strategy

Never assume the server call will succeed. Store the previous state and restore it on error.

### 2. Provide Visual Feedback for Pending States

Even with optimistic updates, show subtle indicators for pending operations.

### 3. Handle Race Conditions

Use tools like React Query's \`cancelQueries\` to prevent stale updates.

### 4. Be Careful with Critical Operations

Don't use optimistic updates for financial transactions, data deletion, permission changes, or anything irreversible.

## Conclusion

Optimistic UI updates transform sluggish interfaces into snappy, responsive experiences. When implemented correctly with proper error handling and rollback strategies, they're one of the most impactful UX improvements you can make.
    `
  },
  {
    id: 'api-vs-endpoint',
    title: 'API vs Endpoint: Understanding the Distinction',
    excerpt: 'Clarifying the often-confused terminology between APIs and endpoints, and why understanding the difference matters for frontend developers.',
    date: 'November 15, 2024',
    readTime: '6 min read',
    category: 'Web Development',
    gradient: 'from-purple-500 to-pink-500',
    tags: ['API', 'Backend', 'Architecture', 'Fundamentals'],
    content: `
## Introduction

"API" and "endpoint" are terms often used interchangeably, but they represent different concepts. Understanding this distinction is crucial for effective communication with backend developers and clear system design.

## What is an API?

An **API (Application Programming Interface)** is a complete set of rules, protocols, and tools for building software applications. It defines how different software components should interact.

Think of an API as an entire restaurant menu—it's the complete offering of what's available.

## What is an Endpoint?

An **endpoint** is a specific URL or URI where an API can be accessed. It's one specific function or resource within an API.

Think of an endpoint as a single item on that restaurant menu—it's one specific thing you can order.

### Example Endpoints

Within the GitHub API:

- \`GET /users/{username}\` - Get user information
- \`GET /repos/{owner}/{repo}\` - Get repository details
- \`POST /repos/{owner}/{repo}/issues\` - Create an issue

## The Relationship

**One API contains many endpoints.**

## Technical Example

Let's say you're building an e-commerce app:

\`\`\`typescript
// This is your E-commerce API
const API_BASE_URL = 'https://api.mystore.com/v1';

// These are specific endpoints within that API:

// Product endpoints
GET    /products              // List all products
GET    /products/{id}         // Get single product
POST   /products              // Create product (admin)

// Cart endpoints
GET    /cart                  // Get user's cart
POST   /cart/items            // Add item to cart
DELETE /cart/items/{id}       // Remove from cart
\`\`\`

## Why This Matters

### Clear Communication

**Wrong:** "The API is broken"  
**Right:** "The \`GET /products/{id}\` endpoint is returning 500 errors"

## Conclusion

While the terms are related, they're not synonyms. **API** is the big picture—the entire interface. **Endpoint** is specific—one particular access point.
    `
  },
  {
    id: 'react-server-components',
    title: 'React Server Components: The Future of React',
    excerpt: 'Deep dive into React Server Components, how they work, when to use them, and how they\'re revolutionizing the way we build React applications.',
    date: 'November 10, 2024',
    readTime: '12 min read',
    category: 'React',
    gradient: 'from-green-500 to-emerald-500',
    tags: ['React', 'Next.js', 'Server Components', 'Performance'],
    content: `
## Introduction

React Server Components (RSC) represent the biggest shift in React's architecture since Hooks. They fundamentally change how we think about data fetching, code splitting, and the client-server boundary.

## What Are React Server Components?

Server Components are React components that run **only on the server**. They:

- Never ship JavaScript to the client
- Can directly access backend resources (databases, file systems)
- Render to a special format that's streamed to the client
- Can be mixed with Client Components

## The Problem They Solve

Traditional React apps face a dilemma with waterfalls, bundle size, and data fetching limitations.

## Server Components Solution

\`\`\`typescript
// Server Component - Runs only on server
async function ProductList() {
  // Direct database access - no API needed!
  const products = await db.products.findMany();
  
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
\`\`\`

Benefits:

- No client JavaScript for this component
- Direct data access
- Data ready on first render

## Server vs Client Components

### Server Components

Can use async/await, can access backend directly, but cannot use hooks or event handlers.

### Client Components

\`\`\`typescript
'use client';

import { useState } from 'react';

function LikeButton({ postId }) {
  const [liked, setLiked] = useState(false);
  
  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '❤️' : '🤍'}
    </button>
  );
}
\`\`\`

## Conclusion

React Server Components represent a paradigm shift in React development. They solve long-standing problems with data fetching, bundle size, and server-client boundaries. The future of React is hybrid: Server Components for data and rendering, Client Components for interactivity.
    `
  },
  {
    id: 'micro-frontend-architecture',
    title: 'Micro-Frontend Architecture: Scaling Large Applications',
    excerpt: 'Explore micro-frontend patterns, their benefits and challenges, and practical implementation strategies for enterprise-scale applications.',
    date: 'November 5, 2024',
    readTime: '10 min read',
    category: 'Architecture',
    gradient: 'from-orange-500 to-red-500',
    tags: ['Architecture', 'Scalability', 'Micro-frontends', 'Enterprise'],
    content: `
## Introduction

As applications grow, monolithic frontends become bottlenecks. Micro-frontend architecture breaks large applications into smaller, independent pieces that multiple teams can develop, test, and deploy separately.

## What Are Micro-Frontends?

Micro-frontends extend the microservices concept to the frontend. Instead of one large codebase, you have multiple smaller applications that work together to form a complete user experience.

## Implementation Approaches

### 1. Build-Time Integration (NPM Packages)

Simple but requires redeployment of host app.

### 2. Run-Time Integration (Module Federation)

\`\`\`javascript
// webpack.config.js (Products MFE)
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/ProductList'
      },
      shared: ['react', 'react-dom']
    })
  ]
};
\`\`\`

Independent deployments with version flexibility.

### 3. Web Components

Framework-agnostic with true isolation.

## When to Use Micro-Frontends

### Good Fit

- Large teams (50+ developers)
- Multiple products/domains
- Need independent deployments
- Enterprise applications

### Not Recommended

- Small teams (<10 developers)
- Simple applications
- Early-stage products

## Conclusion

Micro-frontends are powerful but complex. They solve real problems in large organizations like team scalability and independent deployments, but come with increased complexity and performance overhead. Use them when the benefits outweigh the costs.
    `
  }
];

export const categories = ['All', 'React Patterns', 'Web Development', 'React', 'Architecture'];

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === slug);
};

export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
  return blogPosts.filter(post => post.id !== currentSlug).slice(0, limit);
};