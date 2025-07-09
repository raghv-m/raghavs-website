const express = require('express');
const router = express.Router();

// Projects data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    category: "web",
    github: "https://github.com/username/ecommerce",
    live: "https://ecommerce-demo.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    category: "web",
    github: "https://github.com/username/task-app",
    live: "https://task-app-demo.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful UI design.",
    image: "/api/placeholder/400/300",
    technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
    category: "web",
    github: "https://github.com/username/weather-app",
    live: "https://weather-demo.com",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and professional design.",
    image: "/api/placeholder/400/300",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "web",
    github: "https://github.com/username/portfolio",
    live: "https://portfolio-demo.com",
    featured: true
  },
  {
    id: 5,
    title: "Chat Application",
    description: "Real-time chat application with user authentication, message history, and file sharing capabilities.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    category: "web",
    github: "https://github.com/username/chat-app",
    live: "https://chat-demo.com",
    featured: false
  },
  {
    id: 6,
    title: "Recipe Finder",
    description: "A recipe discovery app that helps users find recipes based on available ingredients and dietary preferences.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Spoonacular API", "CSS3", "JavaScript"],
    category: "web",
    github: "https://github.com/username/recipe-app",
    live: "https://recipe-demo.com",
    featured: false
  },
  {
    id: 7,
    title: "Fitness Tracker",
    description: "A comprehensive fitness tracking application with workout planning, progress monitoring, and nutrition tracking.",
    image: "/api/placeholder/400/300",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    category: "mobile",
    github: "https://github.com/username/fitness-app",
    live: null,
    featured: true
  },
  {
    id: 8,
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support, user management, and SEO optimization.",
    image: "/api/placeholder/400/300",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    category: "web",
    github: "https://github.com/username/blog-platform",
    live: "https://blog-demo.com",
    featured: false
  }
];

// Get all projects
router.get('/', async (req, res) => {
  try {
    const { category, featured, limit } = req.query;
    
    let filteredProjects = projects;
    
    // Filter by category
    if (category) {
      filteredProjects = projects.filter(project => 
        project.category === category
      );
    }
    
    // Filter by featured status
    if (featured === 'true') {
      filteredProjects = filteredProjects.filter(project => 
        project.featured === true
      );
    }
    
    // Apply limit if provided
    if (limit) {
      filteredProjects = filteredProjects.slice(0, parseInt(limit));
    }
    
    res.json({
      success: true,
      data: filteredProjects,
      total: filteredProjects.length,
      filters: { category, featured, limit }
    });
  } catch (error) {
    console.error('Projects fetch error:', error);
    res.status(500).json({
      error: 'Failed to fetch projects data'
    });
  }
});

// Get single project by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = projects.find(p => p.id === parseInt(id));
    
    if (!project) {
      return res.status(404).json({
        error: 'Project not found'
      });
    }
    
    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Single project fetch error:', error);
    res.status(500).json({
      error: 'Failed to fetch project'
    });
  }
});

// Get project categories
router.get('/categories/list', async (req, res) => {
  try {
    const categories = Array.from(new Set(projects.map(p => p.category)));
    
    res.json({
      success: true,
      data: categories,
      total: categories.length
    });
  } catch (error) {
    console.error('Categories fetch error:', error);
    res.status(500).json({
      error: 'Failed to fetch categories'
    });
  }
});

module.exports = router; 