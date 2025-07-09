const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const api = {
  // Contact form submission
  contact: async (data: { name: string; email: string; message: string }) => {
    const response = await fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },
  
  // Photography gallery
  photography: async (tag?: string) => {
    const url = tag ? `${API_BASE}/api/photography?tag=${tag}` : `${API_BASE}/api/photography`;
    const response = await fetch(url);
    return response.json();
  },
  
  // Get photography tags
  photographyTags: async () => {
    const response = await fetch(`${API_BASE}/api/photography/tags`);
    return response.json();
  },
  
  // Projects
  projects: async (category?: string, featured?: boolean) => {
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (featured) params.append('featured', 'true');
    
    const url = params.toString() ? `${API_BASE}/api/projects?${params}` : `${API_BASE}/api/projects`;
    const response = await fetch(url);
    return response.json();
  },
  
  // Get project categories
  projectCategories: async () => {
    const response = await fetch(`${API_BASE}/api/projects/categories/list`);
    return response.json();
  },
  
  // Skills and experience
  skills: async () => {
    const response = await fetch(`${API_BASE}/api/skills`);
    return response.json();
  },
  
  // Get specific skill category
  skillsByCategory: async (category: 'technical' | 'soft' | 'experience' | 'education') => {
    const response = await fetch(`${API_BASE}/api/skills/${category}`);
    return response.json();
  },
  
  // Health check
  health: async () => {
    const response = await fetch(`${API_BASE}/health`);
    return response.json();
  }
}; 