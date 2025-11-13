export interface Project {
  id: number
  title: string
  description: string
  image?: string
  category: 'business' | 'fullstack' | 'chat' | 'ai-chatbot' | 'other'
  technologies: string[]
  github: string
  live: string
  featured: boolean
  status: 'active' | 'development'
  lastDeployment?: string
  details: {
    overview: string
    features: string[]
    challenges: string[]
    solutions: string[]
  }
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'EZ PLUMBING INC',
    description: 'Professional website for Edmonton plumbing business. Built for a real client with focus on lead generation, mobile UX, and local SEO.',
    category: 'business',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/raghv-m/EZ-Plumbing-Inc',
    live: 'https://ez-plumbing-inc.vercel.app',
    featured: true,
    status: 'active',
    lastDeployment: 'October 30, 2025',
    details: {
      overview: 'Professional business website for EZ Plumbing Inc - a real Edmonton plumbing company. Designed to generate leads and showcase services with emphasis on mobile experience.',
      features: [
        'Mobile-first responsive design',
        'Service listings with pricing',
        'Floating call-to-action buttons',
        'Contact form with email integration',
        'Service area coverage map',
        'Customer testimonials section',
        '24/7 emergency contact info',
        'Local SEO optimization'
      ],
      challenges: [
        'Converting mobile visitors to leads',
        'Standing out in competitive Edmonton market',
        'Fast loading on mobile networks',
        'Clear service communication'
      ],
      solutions: [
        'Strategic CTA button placement',
        'Optimized images and lazy loading',
        'Clear service descriptions',
        'One-click call functionality'
      ]
    }
  },
  {
    id: 2,
    title: 'MR. ROOTER PLUMBING EDMONTON',
    description: 'Edmonton plumbing service website for real client. Features comprehensive service catalog, online booking, and local SEO optimization.',
    category: 'business',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/raghv-m/Mr-Rooter-Plumbing-Edmonton',
    live: 'https://mr-rooter-plumbing-edmonton.vercel.app',
    featured: true,
    status: 'active',
    lastDeployment: 'October 29, 2025',
    details: {
      overview: 'Comprehensive website for Mr. Rooter Plumbing Edmonton - a real plumbing business. Built to attract local customers and showcase professional services.',
      features: [
        'Detailed service catalog',
        'Edmonton area targeting',
        'Emergency service booking',
        'Online appointment system',
        'Customer reviews integration',
        'Service guarantees',
        'Mobile-optimized design',
        'Fast page performance'
      ],
      challenges: [
        'Ranking for competitive keywords',
        'Organizing multiple service types',
        'Building customer trust online',
        'Mobile booking experience'
      ],
      solutions: [
        'Local schema markup implementation',
        'Clear service categorization',
        'Prominent testimonials and guarantees',
        'Simplified mobile booking flow'
      ]
    }
  },
  {
    id: 3,
    title: "FATIMA'S KITCHEN",
    description: 'Restaurant website for real Edmonton restaurant. Features interactive menu, location info, and online ordering integration.',
    category: 'business',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/raghv-m/fatimas-kitchen',
    live: 'https://fatimas-kitchen.vercel.app',
    featured: true,
    status: 'active',
    lastDeployment: 'October 28, 2025',
    details: {
      overview: "Modern restaurant website for Fatima's Kitchen - a real Edmonton restaurant. Showcases menu, location, and enables online ordering.",
      features: [
        'Interactive digital menu',
        'Location and hours display',
        'Online ordering system',
        'Food photography gallery',
        'Mobile-responsive layout',
        'Contact information',
        'Special offers and promotions',
        'Social media integration'
      ],
      challenges: [
        'Appetizing visual presentation',
        'Easy menu navigation',
        'Mobile ordering flow',
        'Fast image loading'
      ],
      solutions: [
        'Professional food photography',
        'Intuitive menu categories',
        'Streamlined mobile checkout',
        'Next.js image optimization'
      ]
    }
  },
  {
    id: 4,
    title: 'CHRIS COMPANY - Business Website',
    description: 'Professional business website with modern design and comprehensive service information.',
    category: 'business',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/raghv-m/chris-company',
    live: 'https://chris-company.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'October 25, 2025',
    details: {
      overview: 'Modern business website showcasing professional services with clean design and user-friendly navigation.',
      features: [
        'Professional design',
        'Service showcase',
        'Contact integration',
        'Responsive layout',
        'Fast performance',
        'SEO optimized'
      ],
      challenges: [
        'Creating professional appearance',
        'Clear service communication',
        'Mobile optimization'
      ],
      solutions: [
        'Clean modern design',
        'Structured content layout',
        'Mobile-first approach'
      ]
    }
  },
  {
    id: 5,
    title: 'EASY ONE - Full-Stack RBAC Application',
    description: 'Full-stack application demonstrating Role-Based Access Control (RBAC) with authentication, authorization, and user management.',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Vercel'],
    github: 'https://github.com/raghv-m/easy-one',
    live: 'https://easy-one-web.vercel.app',
    featured: true,
    status: 'active',
    lastDeployment: 'October 24, 2025',
    details: {
      overview: 'Comprehensive full-stack application demonstrating Role-Based Access Control (RBAC) with separate backend API and frontend web application.',
      features: [
        'User authentication with JWT',
        'Role-based access control (RBAC)',
        'Admin dashboard for user management',
        'Permission-based feature access',
        'Secure API endpoints',
        'User profile management',
        'Activity logging',
        'Responsive web interface'
      ],
      challenges: [
        'Implementing secure RBAC system',
        'Managing complex permission hierarchies',
        'Securing API endpoints',
        'Session management'
      ],
      solutions: [
        'Created modular permission system',
        'Implemented JWT-based authentication',
        'Added middleware for route protection',
        'Used secure HTTP-only cookies'
      ]
    }
  },
  {
    id: 6,
    title: 'CHAI LOUNGE - Chat Application',
    description: 'Real-time chat application with messaging capabilities and social interaction features.',
    category: 'chat',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/raghv-m/Chai-Lounge',
    live: 'https://chai-lounge.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'October 22, 2025',
    details: {
      overview: 'Real-time chat application for casual conversations and social interaction with modern messaging features.',
      features: [
        'Real-time messaging',
        'User authentication',
        'Chat rooms',
        'Message history',
        'Online status indicators',
        'Responsive design'
      ],
      challenges: [
        'Real-time message delivery',
        'Scalable architecture',
        'User presence tracking'
      ],
      solutions: [
        'WebSocket implementation',
        'Efficient database queries',
        'Socket.io for real-time features'
      ]
    }
  },
  {
    id: 7,
    title: 'IMMIGRATEX - Immigration Platform',
    description: 'Immigration services platform with comprehensive information and application management features.',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    github: 'https://github.com/raghv-m/immigratex',
    live: 'https://immigratex.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'October 21, 2025',
    details: {
      overview: 'Comprehensive immigration services platform providing information and application management for immigration processes.',
      features: [
        'Service information',
        'Application tracking',
        'Document management',
        'User dashboard',
        'Responsive design',
        'Secure authentication'
      ],
      challenges: [
        'Complex data management',
        'Document security',
        'User-friendly interface'
      ],
      solutions: [
        'Structured database design',
        'Secure file handling',
        'Intuitive UI/UX'
      ]
    }
  },
  {
    id: 8,
    title: 'RAGHAVS - Personal Portfolio',
    description: 'This portfolio website - showcasing my work, skills, and projects with modern design and smooth animations.',
    category: 'other',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel Analytics'],
    github: 'https://github.com/raghv-m/raghavs-website',
    live: 'https://www.raghv.dev',
    featured: true,
    status: 'active',
    lastDeployment: 'November 12, 2025',
    details: {
      overview: 'Modern, responsive portfolio website showcasing professional work, technical skills, and creative projects with smooth animations and dark mode support.',
      features: [
        'Responsive mobile-first design',
        'Dark/Light theme toggle',
        'Smooth page transitions',
        'Project showcase with modals',
        'Photography gallery',
        'Contact form integration',
        'SEO optimized',
        'Vercel Analytics'
      ],
      challenges: [
        'Smooth animations without performance impact',
        'Complex layout transitions',
        'Image optimization',
        'Dark mode management'
      ],
      solutions: [
        'Framer Motion for animations',
        'Lazy loading for images',
        'Reusable component architecture',
        'CSS variables for theming'
      ]
    }
  },
]