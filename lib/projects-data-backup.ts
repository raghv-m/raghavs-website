export interface Project {
  id: number
  title: string
  description: string
  image?: string
  category: 'business' | 'fullstack' | 'chat' | 'ai-chatbot' | 'video' | 'demo' | 'portfolio' | 'other'
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
    title: 'RAGHAVS - Personal Portfolio',
    description: 'Personal portfolio website showcasing my work, skills, and projects. Built with modern web technologies to provide a professional online presence.',
    category: 'portfolio',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel Analytics'],
    github: 'https://github.com/raghv-m/raghavs-website',
    live: 'https://www.raghv.dev',
    featured: true,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'A modern, responsive portfolio website showcasing my professional work, technical skills, and creative projects. Features smooth animations, dark mode support, and optimized performance.',
      features: [
        'Responsive design with mobile-first approach',
        'Dark/Light theme toggle',
        'Smooth page transitions and animations',
        'Project showcase with detailed modals',
        'Photography gallery integration',
        'Contact form with email integration',
        'SEO optimized',
        'Vercel Analytics integration'
      ],
      challenges: [
        'Creating smooth animations without performance impact',
        'Implementing complex layout transitions',
        'Optimizing images and assets',
        'Managing dark mode across all components'
      ],
      solutions: [
        'Used Framer Motion for performant animations',
        'Implemented lazy loading for images',
        'Created reusable component architecture',
        'Used CSS variables for theme management'
      ]
    }
  },
  {
    id: 2,
    title: 'EZ PLUMBING INC',
    description: 'Professional website for a plumbing business featuring improved mobile UX, responsive navbar, and service information with floating call-to-action buttons.',
    category: 'business',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/raghv-m/EZ-Plumbing-Inc',
    live: 'https://ez-plumbing-inc.vercel.app',
    featured: true,
    status: 'active',
    lastDeployment: 'October 30, 2025',
    details: {
      overview: 'A professional business website for EZ Plumbing Inc, designed to attract customers and showcase plumbing services with an emphasis on mobile user experience and easy contact options.',
      features: [
        'Responsive mobile-first design',
        'Service listings with detailed descriptions',
        'Floating call-to-action buttons',
        'Contact form integration',
        'Service area map',
        'Customer testimonials',
        'Emergency contact information',
        'SEO optimized for local search'
      ],
      challenges: [
        'Optimizing for mobile user experience',
        'Creating effective call-to-action placement',
        'Local SEO optimization',
        'Fast loading times'
      ],
      solutions: [
        'Implemented mobile-first responsive design',
        'Added strategic floating CTA buttons',
        'Optimized meta tags and structured data',
        'Used Next.js image optimization'
      ]
    }
  },
  {
    id: 3,
    title: 'MR. ROOTER PLUMBING EDMONTON',
    description: 'Edmonton-based plumbing service website with comprehensive service listings and contact features. Designed for local SEO and customer engagement.',
    category: 'business',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/raghv-m/Mr-Rooter-Plumbing-Edmonton',
    live: 'https://mr-rooter-plumbing-edmonton.vercel.app',
    featured: true,
    status: 'active',
    lastDeployment: 'October 29, 2025',
    details: {
      overview: 'A comprehensive website for Mr. Rooter Plumbing Edmonton, featuring detailed service information, local SEO optimization, and easy customer contact options.',
      features: [
        'Comprehensive service catalog',
        'Local Edmonton area focus',
        'Emergency service information',
        'Online booking system',
        'Customer reviews section',
        'Service guarantees display',
        'Mobile-responsive design',
        'Fast page load times'
      ],
      challenges: [
        'Local SEO optimization for Edmonton market',
        'Showcasing multiple service categories',
        'Building trust with potential customers',
        'Mobile optimization for on-the-go users'
      ],
      solutions: [
        'Implemented local schema markup',
        'Created organized service category pages',
        'Added customer testimonials and guarantees',
        'Optimized for mobile-first experience'
      ]
    }
  },
  {
    id: 4,
    title: "FATIMA'S KITCHEN",
    description: 'Restaurant website featuring menu, location, and ordering information for Fatimas Kitchen with enhanced features and design improvements.',
    category: 'business',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/raghv-m/fatimas-kitchen',
    live: 'https://fatimas-kitchen.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'October 28, 2025',
    details: {
      overview: "A modern restaurant website for Fatima's Kitchen, showcasing menu items, location information, and providing an easy way for customers to explore offerings.",
      features: [
        'Interactive menu display',
        'Location and hours information',
        'Online ordering integration',
        'Photo gallery of dishes',
        'Responsive mobile design',
        'Contact information',
        'Special offers section'
      ],
      challenges: [
        'Creating an appetizing visual presentation',
        'Menu organization and navigation',
        'Mobile ordering experience',
        'Image optimization for food photos'
      ],
      solutions: [
        'Used high-quality food photography',
        'Implemented intuitive menu categories',
        'Created mobile-friendly ordering flow',
        'Optimized images with Next.js Image component'
      ]
    }
  },
  {
    id: 5,
    title: 'EASY ONE - Full-Stack Application',
    description: 'Full-stack application with Role-Based Access Control (RBAC) implementation. Features authentication, authorization, and comprehensive data management.',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Vercel'],
    github: 'https://github.com/raghv-m/easy-one',
    live: 'https://easy-one-web.vercel.app',
    featured: true,
    status: 'active',
    lastDeployment: 'October 24, 2025',
    details: {
      overview: 'A comprehensive full-stack application demonstrating Role-Based Access Control (RBAC) with separate backend API and frontend web application. Handles user authentication, authorization, and role-based permissions.',
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
    description: 'Real-time chat application for casual conversations and social interaction. Features messaging capabilities and user engagement features.',
    category: 'chat',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/raghv-m/Chai-Lounge',
    live: 'https://chai-lounge.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'December 22, 2024',
    details: {
      overview: 'A real-time chat application designed for casual conversations, featuring instant messaging, user presence indicators, and a friendly user interface.',
      features: [
        'Real-time messaging with Socket.io',
        'User authentication',
        'Online/offline status indicators',
        'Message history',
        'Typing indicators',
        'User profiles',
        'Emoji support',
        'Responsive design'
      ],
      challenges: [
        'Real-time message synchronization',
        'Handling multiple concurrent users',
        'Message persistence',
        'Connection stability'
      ],
      solutions: [
        'Implemented Socket.io for real-time communication',
        'Used MongoDB for message storage',
        'Added reconnection logic',
        'Optimized message delivery'
      ]
    }
  },
  {
    id: 7,
    title: 'CHRIS COMPANY - Business Website',
    description: 'Corporate website with enhanced Hero component layout and responsive design. Features improved styling for better user engagement and professional business presentation.',
    category: 'business',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/raghv-m/chris-company',
    live: 'https://chris-company.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'A professional corporate website featuring modern design, enhanced hero section, and comprehensive business information presentation.',
      features: [
        'Modern hero section with animations',
        'Service showcase',
        'Company information',
        'Contact form',
        'Responsive design',
        'Professional styling',
        'Fast loading times'
      ],
      challenges: [
        'Creating impactful hero section',
        'Professional design aesthetic',
        'Content organization',
        'Performance optimization'
      ],
      solutions: [
        'Designed eye-catching hero component',
        'Implemented clean, professional layout',
        'Organized content hierarchically',
        'Optimized assets and code'
      ]
    }
  },
  {
    id: 8,
    title: 'CHATTR - Mobile Chat App',
    description: 'Real-time chat application built with Flutter and Firebase. Features instant messaging, user authentication, and cross-platform support.',
    category: 'chat',
    technologies: ['Flutter', 'Firebase', 'Dart', 'Cloud Firestore'],
    github: 'https://github.com/raghv-m/chattr',
    live: '',
    featured: true,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'A modern mobile chat application built with Flutter and Firebase, providing seamless real-time messaging experience across iOS and Android platforms.',
      features: [
        'Real-time messaging',
        'User authentication with Firebase Auth',
        'Profile management',
        'Message history and persistence',
        'Push notifications',
        'Online/offline status',
        'Cross-platform support (iOS & Android)',
        'Material Design UI'
      ],
      challenges: [
        'Real-time data synchronization',
        'Cross-platform compatibility',
        'Message delivery reliability',
        'Offline message handling'
      ],
      solutions: [
        'Implemented Firebase Realtime Database',
        'Used Flutter for cross-platform development',
        'Added message queue for offline support',
        'Created responsive UI components'
      ]
    }
  },
  {
    id: 9,
    title: 'IMMIGRATEX - Immigration Platform',
    description: 'Comprehensive immigration platform helping newcomers navigate the immigration process with step-by-step guidance and document management.',
    category: 'fullstack',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB'],
    github: 'https://github.com/raghv-m/immigratex',
    live: 'https://immigratex.vercel.app',
    featured: true,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'ImmigrateX is a comprehensive immigration platform designed to help newcomers navigate the complex immigration process. The application provides step-by-step guidance, document management, and personalized recommendations.',
      features: [
        'User authentication and profile management',
        'Step-by-step immigration process guidance',
        'Document upload and management system',
        'Real-time progress tracking',
        'Multi-language support',
        'Admin dashboard for content management',
        'Secure document storage',
        'Application status tracking'
      ],
      challenges: [
        'Complex immigration rule integration',
        'Secure document handling',
        'Multi-platform compatibility',
        'Real-time data synchronization'
      ],
      solutions: [
        'Implemented robust document encryption',
        'Used Firebase for real-time updates',
        'Created responsive design for all devices',
        'Built comprehensive admin panel'
      ]
    }
  },
  {
    id: 10,
    title: 'RAGHAVTUBE - Video Platform',
    description: 'YouTube-inspired video streaming platform with video upload, user channels, subscriptions, and content management features.',
    category: 'video',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Video.js'],
    github: 'https://github.com/raghv-m/raghavtube',
    live: 'https://raghavtube.vercel.app',
    featured: true,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'RaghavTube is a YouTube-inspired video streaming platform that demonstrates modern web development techniques and video handling capabilities with full content management.',
      features: [
        'Video upload and streaming',
        'User channels and subscriptions',
        'Comments and likes system',
        'Video recommendations',
        'Search functionality',
        'Responsive video player',
        'User authentication',
        'Content moderation tools'
      ],
      challenges: [
        'Video processing and optimization',
        'Real-time comments system',
        'Recommendation algorithm',
        'Scalable video storage'
      ],
      solutions: [
        'Implemented video compression pipeline',
        'Used WebSocket for real-time features',
        'Created content-based recommendations',
        'Integrated cloud storage for videos'
      ]
    }
  },
  {
    id: 11,
    title: 'RAGHAVTUBE BACKEND',
    description: 'Backend API for RaghavTube video platform. Handles video processing, user management, and content delivery with scalable architecture.',
    category: 'other',
    technologies: ['Node.js', 'Express', 'MongoDB', 'FFmpeg', 'AWS S3'],
    github: 'https://github.com/raghv-m/raghavtube-backend',
    live: '',
    featured: false,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'The backend API for RaghavTube, providing robust video processing, user management, and content delivery services with a scalable microservices architecture.',
      features: [
        'RESTful API design',
        'Video upload and processing',
        'User authentication and authorization',
        'Content management system',
        'Video transcoding with FFmpeg',
        'Cloud storage integration',
        'Analytics and metrics',
        'Rate limiting and security'
      ],
      challenges: [
        'Video processing at scale',
        'Efficient storage management',
        'API performance optimization',
        'Security and authentication'
      ],
      solutions: [
        'Implemented queue-based video processing',
        'Used cloud storage for scalability',
        'Added caching layers',
        'Implemented JWT-based auth'
      ]
    }
  },
  {
    id: 12,
    title: 'CHATBOT - AI Assistant',
    description: 'AI-powered chatbot application with natural language processing capabilities. Features intelligent responses and conversation management.',
    category: 'ai-chatbot',
    technologies: ['React', 'Node.js', 'OpenAI API', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/raghv-m/chatbot',
    live: 'https://chatbot-raghv.vercel.app',
    featured: true,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'An AI-powered chatbot application that uses natural language processing to provide intelligent responses and maintain contextual conversations.',
      features: [
        'Natural language processing',
        'Context-aware conversations',
        'Multi-turn dialogue support',
        'Conversation history',
        'User authentication',
        'Customizable bot personality',
        'Real-time responses',
        'Analytics dashboard'
      ],
      challenges: [
        'Maintaining conversation context',
        'Response accuracy and relevance',
        'API rate limiting',
        'Real-time performance'
      ],
      solutions: [
        'Implemented conversation state management',
        'Used OpenAI API for intelligent responses',
        'Added caching for common queries',
        'Optimized API calls'
      ]
    }
  },
  {
    id: 13,
    title: 'CHATBOT BACKEND',
    description: 'Backend API for AI chatbot application. Handles NLP processing, conversation management, and integration with AI services.',
    category: 'ai-chatbot',
    technologies: ['Node.js', 'Express', 'OpenAI API', 'MongoDB', 'Redis'],
    github: 'https://github.com/raghv-m/chatbot-backend',
    live: '',
    featured: false,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'The backend service for the AI chatbot, managing conversation state, processing natural language, and integrating with AI services for intelligent responses.',
      features: [
        'RESTful API endpoints',
        'OpenAI API integration',
        'Conversation state management',
        'User session handling',
        'Response caching',
        'Rate limiting',
        'Analytics tracking',
        'Error handling and logging'
      ],
      challenges: [
        'Managing API costs',
        'Conversation context persistence',
        'Response time optimization',
        'Scalability'
      ],
      solutions: [
        'Implemented intelligent caching',
        'Used Redis for session management',
        'Optimized API call patterns',
        'Added horizontal scaling support'
      ]
    }
  },
  {
    id: 14,
    title: 'CHATBOT WEB',
    description: 'Web interface for AI chatbot application. Features modern chat UI, conversation history, and responsive design.',
    category: 'ai-chatbot',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Socket.io Client'],
    github: 'https://github.com/raghv-m/chatbot-web',
    live: 'https://chatbot-web-raghv.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'A modern web interface for the AI chatbot, providing an intuitive chat experience with real-time messaging and conversation management.',
      features: [
        'Modern chat interface',
        'Real-time message updates',
        'Conversation history',
        'Typing indicators',
        'Message formatting',
        'Dark/Light theme',
        'Responsive design',
        'Keyboard shortcuts'
      ],
      challenges: [
        'Real-time UI updates',
        'Message rendering performance',
        'Mobile responsiveness',
        'State management'
      ],
      solutions: [
        'Used Socket.io for real-time updates',
        'Implemented virtual scrolling',
        'Created mobile-first design',
        'Used React Context for state'
      ]
    }
  },
  {
    id: 15,
    title: 'CHATBOT MOBILE',
    description: 'Mobile application for AI chatbot. Built with Flutter for cross-platform support with native performance.',
    category: 'ai-chatbot',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    github: 'https://github.com/raghv-m/chatbot-mobile',
    live: '',
    featured: false,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'A cross-platform mobile application for the AI chatbot, providing native performance and user experience on both iOS and Android devices.',
      features: [
        'Native mobile experience',
        'Push notifications',
        'Offline message queue',
        'Voice input support',
        'Conversation sync',
        'Material Design UI',
        'Biometric authentication',
        'Cross-platform support'
      ],
      challenges: [
        'Cross-platform compatibility',
        'Offline functionality',
        'Push notification handling',
        'Performance optimization'
      ],
      solutions: [
        'Used Flutter for cross-platform development',
        'Implemented local database for offline support',
        'Integrated Firebase Cloud Messaging',
        'Optimized widget rendering'
      ]
    }
  },
  {
    id: 16,
    title: 'CHATBOT ADMIN',
    description: 'Admin dashboard for managing AI chatbot configurations, monitoring conversations, and analyzing user interactions.',
    category: 'ai-chatbot',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/raghv-m/chatbot-admin',
    live: '',
    featured: false,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'An administrative dashboard for managing the AI chatbot system, providing insights into conversations, user behavior, and system performance.',
      features: [
        'Conversation monitoring',
        'User analytics',
        'Bot configuration management',
        'Performance metrics',
        'Response quality analysis',
        'User feedback tracking',
        'System health monitoring',
        'Export and reporting tools'
      ],
      challenges: [
        'Real-time data visualization',
        'Large dataset handling',
        'Complex analytics calculations',
        'User permission management'
      ],
      solutions: [
        'Implemented efficient data aggregation',
        'Used Chart.js for visualizations',
        'Added pagination and filtering',
        'Created role-based access control'
      ]
    }
  },
  {
    id: 17,
    title: 'CHAT APP - Real-time Messaging',
    description: 'Feature-rich real-time chat application with group chats, file sharing, and modern messaging features.',
    category: 'chat',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Redis'],
    github: 'https://github.com/raghv-m/chat-app',
    live: 'https://chat-app-raghv.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'A comprehensive real-time chat application with advanced features like group chats, file sharing, and rich media support.',
      features: [
        'One-on-one messaging',
        'Group chat support',
        'File and image sharing',
        'Message reactions',
        'Read receipts',
        'Typing indicators',
        'User presence',
        'Message search'
      ],
      challenges: [
        'Scalable real-time architecture',
        'File upload handling',
        'Message delivery guarantees',
        'Group chat synchronization'
      ],
      solutions: [
        'Used Socket.io with Redis adapter',
        'Implemented chunked file uploads',
        'Added message acknowledgment system',
        'Created efficient group message broadcasting'
      ]
    }
  },
  {
    id: 18,
    title: 'CHAT APP BACKEND',
    description: 'Backend service for real-time chat application. Handles message routing, user management, and file storage.',
    category: 'chat',
    technologies: ['Node.js', 'Express', 'Socket.io', 'MongoDB', 'AWS S3'],
    github: 'https://github.com/raghv-m/chat-app-backend',
    live: '',
    featured: false,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'The backend infrastructure for the real-time chat application, managing message routing, user sessions, and file storage with high availability.',
      features: [
        'WebSocket server management',
        'Message persistence',
        'User authentication',
        'File upload handling',
        'Message encryption',
        'Rate limiting',
        'Load balancing support',
        'API endpoints'
      ],
      challenges: [
        'High concurrency handling',
        'Message ordering',
        'Connection management',
        'Data consistency'
      ],
      solutions: [
        'Implemented Redis for pub/sub',
        'Used message queues',
        'Added connection pooling',
        'Implemented distributed locks'
      ]
    }
  },
  {
    id: 19,
    title: 'CHAT APP WEB',
    description: 'Web client for real-time chat application. Features modern UI, responsive design, and rich messaging capabilities.',
    category: 'chat',
    technologies: ['React', 'TypeScript', 'Socket.io Client', 'Tailwind CSS'],
    github: 'https://github.com/raghv-m/chat-app-web',
    live: 'https://chat-app-web-raghv.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'A modern web client for the real-time chat application, providing an intuitive and feature-rich messaging experience.',
      features: [
        'Modern chat interface',
        'Real-time updates',
        'File preview and download',
        'Emoji picker',
        'Message formatting',
        'Search functionality',
        'Notification system',
        'Responsive design'
      ],
      challenges: [
        'Real-time UI synchronization',
        'File preview generation',
        'Performance with large chat history',
        'Mobile responsiveness'
      ],
      solutions: [
        'Implemented virtual scrolling',
        'Used web workers for file processing',
        'Added lazy loading',
        'Created mobile-optimized layouts'
      ]
    }
  },
  {
    id: 20,
    title: '3D CHESS GAME',
    description: 'Interactive 3D chess game built with Next.js and Three.js. Features realistic 3D graphics, smooth gameplay, and chess engine.',
    category: 'demo',
    technologies: ['Next.js', 'Three.js', 'React', 'TypeScript', 'Chess.js'],
    github: 'https://github.com/raghv-m/3d-chess',
    live: 'https://3d-chess-raghv.vercel.app',
    featured: true,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'A fully interactive 3D chess game that brings the classic game to life with modern web technologies, featuring realistic 3D graphics and smooth animations.',
      features: [
        '3D chess board and pieces',
        'Real-time game logic',
        'Move validation',
        'Game state management',
        'Undo/Redo functionality',
        'Touch controls for mobile',
        'Camera controls',
        'Responsive design'
      ],
      challenges: [
        '3D graphics optimization',
        'Complex chess logic implementation',
        'Cross-browser compatibility',
        'Mobile performance'
      ],
      solutions: [
        'Used Three.js for efficient 3D rendering',
        'Implemented Chess.js for game logic',
        'Added progressive enhancement',
        'Optimized for mobile devices'
      ]
    }
  },
  {
    id: 21,
    title: 'BAT-APP - Data Management',
    description: 'Comprehensive data management application with CRUD operations, analytics, and user management features.',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    github: 'https://github.com/raghv-m/bat-app',
    live: 'https://bat-app-raghv.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'Bat-APP is a comprehensive data management system that provides efficient data handling, user management, and analytics capabilities for businesses.',
      features: [
        'User authentication and authorization',
        'Data CRUD operations',
        'Advanced search and filtering',
        'Data visualization',
        'Export functionality',
        'Admin dashboard',
        'Role-based permissions',
        'Audit logging'
      ],
      challenges: [
        'Large dataset handling',
        'Real-time data updates',
        'User permission management',
        'Data security'
      ],
      solutions: [
        'Implemented pagination and lazy loading',
        'Used WebSocket for real-time updates',
        'Created role-based access control',
        'Added data encryption'
      ]
    }
  },
  {
    id: 22,
    title: 'ASTROEASY - Astrology Platform',
    description: 'Astrology web application providing personalized horoscopes, birth charts, and astrological insights with modern UI.',
    category: 'demo',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Astrology APIs'],
    github: 'https://github.com/raghv-m/astroeasy',
    live: 'https://astroeasy-raghv.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'Astroeasy is an astrology web application that provides personalized horoscopes, birth charts, and astrological insights with a modern and intuitive interface.',
      features: [
        'Personalized horoscopes',
        'Birth chart generation',
        'Astrological calculations',
        'Daily predictions',
        'User profiles',
        'Compatibility matching',
        'Zodiac information',
        'Planetary positions'
      ],
      challenges: [
        'Complex astrological calculations',
        'Data accuracy and validation',
        'User data privacy',
        'Real-time calculations'
      ],
      solutions: [
        'Implemented precise astronomical algorithms',
        'Added comprehensive data validation',
        'Used encryption for user data',
        'Optimized calculation performance'
      ]
    }
  },
  {
    id: 23,
    title: 'DIGITAL MARKETING UI',
    description: 'Modern marketing dashboard with analytics, campaign management, and responsive design. Features data visualization and reporting.',
    category: 'demo',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'Bootstrap'],
    github: 'https://github.com/raghv-m/digital-marketing-ui',
    live: 'https://digital-marketing-ui-raghv.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'A modern digital marketing dashboard that provides comprehensive analytics, campaign management tools, and beautiful data visualization for marketing professionals.',
      features: [
        'Analytics dashboard',
        'Campaign management',
        'Data visualization',
        'Responsive design',
        'Interactive charts',
        'Export functionality',
        'Performance metrics',
        'ROI tracking'
      ],
      challenges: [
        'Complex data visualization',
        'Responsive design implementation',
        'Performance optimization',
        'Cross-browser compatibility'
      ],
      solutions: [
        'Used Chart.js for data visualization',
        'Implemented mobile-first design',
        'Optimized CSS and JavaScript',
        'Added progressive enhancement'
      ]
    }
  },
  {
    id: 24,
    title: 'PORTFOLIO TEMPLATE 1',
    description: 'Modern portfolio template with clean design, smooth animations, and responsive layout. Perfect for developers and designers.',
    category: 'portfolio',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/raghv-m/portfolio-template-1',
    live: 'https://portfolio-template-1-raghv.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'A modern and clean portfolio template designed for developers and designers to showcase their work with smooth animations and professional design.',
      features: [
        'Clean modern design',
        'Smooth animations',
        'Project showcase',
        'Skills section',
        'Contact form',
        'Responsive layout',
        'Dark mode support',
        'SEO optimized'
      ],
      challenges: [
        'Creating reusable template structure',
        'Performance optimization',
        'Cross-browser compatibility',
        'Customization flexibility'
      ],
      solutions: [
        'Built modular component architecture',
        'Optimized animations and assets',
        'Tested across multiple browsers',
        'Created easy customization system'
      ]
    }
  },
  {
    id: 25,
    title: 'PORTFOLIO TEMPLATE 2',
    description: 'Alternative portfolio template with bold design, interactive elements, and modern aesthetics for creative professionals.',
    category: 'portfolio',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'GSAP'],
    github: 'https://github.com/raghv-m/portfolio-template-2',
    live: 'https://portfolio-template-2-raghv.vercel.app',
    featured: false,
    status: 'active',
    lastDeployment: 'September 26, 2025',
    details: {
      overview: 'A bold and creative portfolio template with interactive elements and modern aesthetics, perfect for creative professionals who want to stand out.',
      features: [
        'Bold creative design',
        'Interactive animations',
        'Project gallery',
        'About section',
        'Contact integration',
        'Mobile responsive',
        'Theme customization',
        'Performance optimized'
      ],
      challenges: [
        'Creating unique design elements',
        'Complex animation sequences',
        'Maintaining performance',
        'User experience balance'
      ],
      solutions: [
        'Used GSAP for advanced animations',
        'Implemented lazy loading',
        'Optimized animation performance',
        'Created intuitive navigation'
      ]
    }
  },
]
