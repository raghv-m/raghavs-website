const express = require('express');
const router = express.Router();

// Skills data
const skills = {
  technical: {
    title: "Technical Skills",
    skills: [
      {
        category: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
      },
      {
        category: "Backend",
        skills: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Firebase", "MongoDB", "PostgreSQL"]
      },
      {
        category: "Mobile",
        skills: ["React Native", "Flutter", "Mobile App Development", "Cross-platform Development"]
      },
      {
        category: "Tools & Others",
        skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Adobe Creative Suite", "Docker"]
      }
    ]
  },
  soft: {
    title: "Soft Skills",
    skills: [
      {
        category: "Communication",
        skills: ["Team Collaboration", "Client Communication", "Technical Writing", "Presentation Skills"]
      },
      {
        category: "Problem Solving",
        skills: ["Analytical Thinking", "Creative Solutions", "Debugging", "System Design"]
      },
      {
        category: "Leadership",
        skills: ["Project Management", "Mentoring", "Agile Methodologies", "Code Review"]
      },
      {
        category: "Learning",
        skills: ["Continuous Learning", "Adaptability", "Research Skills", "Documentation"]
      }
    ]
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Full Stack Developer",
        company: "Tech Company",
        duration: "2023 - Present",
        description: "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript"]
      },
      {
        role: "Frontend Developer",
        company: "Startup",
        duration: "2022 - 2023",
        description: "Built responsive user interfaces and implemented modern web technologies. Worked closely with designers to create seamless user experiences.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
      },
      {
        role: "Mobile App Developer",
        company: "Mobile Agency",
        duration: "2021 - 2022",
        description: "Developed cross-platform mobile applications using React Native. Implemented native features and optimized app performance.",
        technologies: ["React Native", "JavaScript", "Firebase", "Redux"]
      }
    ]
  },
  education: {
    title: "Education",
    items: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "NAIT",
        duration: "2020 - 2024",
        description: "Graduated with honors. Focused on software engineering, web development, and mobile app development.",
        achievements: ["Dean's List", "Capstone Project Award", "Programming Competition Winner"]
      }
    ]
  }
};

// Get all skills
router.get('/', async (req, res) => {
  try {
    res.json({
      success: true,
      data: skills
    });
  } catch (error) {
    console.error('Skills fetch error:', error);
    res.status(500).json({
      error: 'Failed to fetch skills data'
    });
  }
});

// Get technical skills
router.get('/technical', async (req, res) => {
  try {
    res.json({
      success: true,
      data: skills.technical
    });
  } catch (error) {
    console.error('Technical skills fetch error:', error);
    res.status(500).json({
      error: 'Failed to fetch technical skills'
    });
  }
});

// Get soft skills
router.get('/soft', async (req, res) => {
  try {
    res.json({
      success: true,
      data: skills.soft
    });
  } catch (error) {
    console.error('Soft skills fetch error:', error);
    res.status(500).json({
      error: 'Failed to fetch soft skills'
    });
  }
});

// Get experience
router.get('/experience', async (req, res) => {
  try {
    res.json({
      success: true,
      data: skills.experience
    });
  } catch (error) {
    console.error('Experience fetch error:', error);
    res.status(500).json({
      error: 'Failed to fetch experience data'
    });
  }
});

// Get education
router.get('/education', async (req, res) => {
  try {
    res.json({
      success: true,
      data: skills.education
    });
  } catch (error) {
    console.error('Education fetch error:', error);
    res.status(500).json({
      error: 'Failed to fetch education data'
    });
  }
});

// Get skills by category
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    
    if (!skills[category]) {
      return res.status(404).json({
        error: 'Category not found'
      });
    }
    
    res.json({
      success: true,
      data: skills[category]
    });
  } catch (error) {
    console.error('Category skills fetch error:', error);
    res.status(500).json({
      error: 'Failed to fetch category skills'
    });
  }
});

module.exports = router; 