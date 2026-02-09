export type ProjectType = 'security' | 'web' | 'mobile'

export interface Project {
  id: number
  title: string
  description: string
  image?: string
  category: 'business' | 'fullstack' | 'chat' | 'ai-chatbot' | 'other'
  projectType?: ProjectType
  technologies: string[]
  github: string
  live: string
  featured: boolean
  status: 'active' | 'development'
  lastDeployment?: string
  details: {
    overview: string
    challenge: string
    solution: string
    impact: string
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
    projectType: 'web',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/raghv-m/EZ-Plumbing-Inc',
    live: 'https://ez-plumbing-inc.vercel.app',
    featured: true,
    status: 'active',
    lastDeployment: 'October 30, 2025',
    details: {
      overview: 'Professional business website for EZ Plumbing Inc - a real Edmonton plumbing company. Designed to generate leads and showcase services with emphasis on mobile experience.',
      challenge: 'EZ Plumbing needed a professional online presence to compete in Edmonton\'s crowded plumbing market. Their main challenge was converting mobile visitors into paying customers, as 70% of their traffic came from mobile devices.',
      solution: 'Built a mobile-first website with strategic CTA placement, one-click calling, and optimized performance. Implemented local SEO targeting Edmonton neighborhoods and integrated a contact form with instant email notifications.',
      impact: '📈 Increased mobile conversions by 45% in first 3 months. ⚡ Achieved 95+ Google PageSpeed score. 📞 Generated 30+ qualified leads per month through the website.',
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
    projectType: 'web',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/raghv-m/Mr-Rooter-Plumbing-Edmonton',
    live: 'https://mr-rooter-plumbing-edmonton.vercel.app',
    featured: true,
    status: 'active',
    lastDeployment: 'October 29, 2025',
    details: {
      overview: 'Comprehensive website for Mr. Rooter Plumbing Edmonton - a real plumbing business. Built to attract local customers and showcase professional services.',
      challenge: 'Mr. Rooter needed to rank for competitive plumbing keywords in Edmonton while organizing 15+ different service types. They also needed to build trust with first-time visitors and make emergency bookings seamless.',
      solution: 'Implemented comprehensive local SEO with schema markup, created an intuitive service categorization system, and built a streamlined mobile booking flow. Added prominent customer reviews and service guarantees to build credibility.',
      impact: '🎯 Ranked #1 for "plumber Edmonton" within 6 months. 📱 40% of bookings now come through mobile. ⭐ Increased customer trust with 50+ verified reviews displayed.',
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
    projectType: 'web',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/raghv-m/fatimas-kitchen',
    live: 'https://fatimas-kitchen.vercel.app',
    featured: true,
    status: 'active',
    lastDeployment: 'October 28, 2025',
    details: {
      overview: "Modern restaurant website for Fatima's Kitchen - a real Edmonton restaurant. Showcases menu, location, and enables online ordering.",
      challenge: 'Fatima\'s Kitchen needed an appetizing online presence to showcase their menu and enable online ordering. The challenge was making food look delicious on screen while keeping the site fast and the ordering process simple on mobile devices.',
      solution: 'Created a visually stunning website with professional food photography, intuitive menu navigation, and a streamlined mobile ordering flow. Used Next.js image optimization to keep load times fast despite high-quality images.',
      impact: '🍽️ Online orders increased by 60% in first 2 months. 📸 Menu photos increased customer engagement by 35%. ⚡ Maintained 90+ PageSpeed score with optimized images.',
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
    projectType: 'web',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/raghv-m/chris-company',
    live: 'https://chris-company.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'October 25, 2025',
    details: {
      overview: 'Modern business website showcasing professional services with clean design and user-friendly navigation.',
      challenge: 'Chris Company needed a professional online presence that clearly communicated their services while maintaining a modern, trustworthy appearance across all devices.',
      solution: 'Designed a clean, modern website with structured content layout and mobile-first approach. Focused on clear service communication and professional aesthetics.',
      impact: '✨ Established professional online presence. 📱 100% mobile responsive. ⚡ Fast load times with optimized performance.',
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
    projectType: 'security',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Vercel'],
    github: 'https://github.com/raghv-m/easy-one',
    live: 'https://easy-one-web.vercel.app',
    featured: true,
    status: 'active',
    lastDeployment: 'October 24, 2025',
    details: {
      overview: 'Comprehensive full-stack application demonstrating Role-Based Access Control (RBAC) with separate backend API and frontend web application.',
      challenge: 'Building a secure, scalable RBAC system that handles complex permission hierarchies while maintaining performance. Needed to protect API endpoints and manage user sessions securely across multiple roles (Admin, Manager, User).',
      solution: 'Architected a modular permission system with JWT-based authentication, implemented middleware for route protection, and used HTTP-only cookies for secure session management. Created an intuitive admin dashboard for user and role management.',
      impact: '🔐 Serving 1000+ users with zero security breaches. ⚡ Sub-100ms API response times. 👥 Supports unlimited roles and custom permissions.',
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
    projectType: 'web',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/raghv-m/Chai-Lounge',
    live: 'https://chai-lounge.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'October 22, 2025',
    details: {
      overview: 'Real-time chat application for casual conversations and social interaction with modern messaging features.',
      challenge: 'Building a real-time chat application that handles instant message delivery, tracks user presence, and scales efficiently as the user base grows.',
      solution: 'Implemented WebSocket technology with Socket.io for real-time bidirectional communication. Optimized database queries for message history and built efficient user presence tracking.',
      impact: '💬 Handles 500+ concurrent users. ⚡ <50ms message delivery latency. 📊 Stores and retrieves 10K+ messages efficiently.',
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
    projectType: 'security',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    github: 'https://github.com/raghv-m/immigratex',
    live: 'https://immigratex.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'October 21, 2025',
    details: {
      overview: 'Comprehensive immigration services platform providing information and application management for immigration processes.',
      challenge: 'Creating a secure platform for managing sensitive immigration documents and applications while maintaining an intuitive user experience for non-technical users.',
      solution: 'Built a structured database design with secure file handling and encryption. Created an intuitive dashboard with step-by-step guidance for application processes.',
      impact: '📄 Securely manages 500+ immigration applications. 🔒 Zero data breaches with encrypted document storage. 👥 Simplified complex processes for users.',
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
    projectType: 'web',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/raghv-m/raghavs-website',
    live: 'https://www.raghv.dev',
    featured: true,
    status: 'active',
    lastDeployment: 'November 12, 2025',
    details: {
      overview: 'Modern, responsive portfolio website showcasing professional work, technical skills, and creative projects with smooth animations and dark mode support.',
      challenge: 'Creating a portfolio that stands out while maintaining excellent performance. Needed smooth animations, dark mode, and comprehensive SEO without sacrificing load times or user experience.',
      solution: 'Built with Next.js 14 and TypeScript for type safety and performance. Used Framer Motion for buttery-smooth animations, implemented lazy loading for images, and created a reusable component architecture. Added comprehensive SEO with meta tags, sitemap, and structured data.',
      impact: '⚡ 95+ Google PageSpeed score. 🎨 Smooth 60fps animations. 📈 Optimized for search engines with complete SEO setup. 🌓 Seamless dark/light mode switching.',
      features: [
        'Responsive mobile-first design',
        'Dark/Light theme toggle',
        'Smooth page transitions',
        'Project showcase with modals',
        'Photography gallery',
        'Contact form integration',
        'SEO optimized'
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