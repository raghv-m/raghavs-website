const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const api = {

  contact: async (data: {
    name: string;
    email: string;
    subject?: string;
    message: string;
    to?: string;
  }) => {
    const response = await fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    return response.json();
  },


  photography: async (tag?: string) => {
    const url = tag ? `${API_BASE}/api/photography?tag=${tag}` : `${API_BASE}/api/photography`;
    const response = await fetch(url);
    return response.json();
  },

  photographyTags: async () => {
    const response = await fetch(`${API_BASE}/api/photography/tags`);
    return response.json();
  },

  projects: async (category?: string, featured?: boolean) => {
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (featured) params.append('featured', 'true');

    const url = params.toString()
      ? `${API_BASE}/api/projects?${params}`
      : `${API_BASE}/api/projects`;

    const response = await fetch(url);
    return response.json();
  },

  projectCategories: async () => {
    const response = await fetch(`${API_BASE}/api/projects/categories/list`);
    return response.json();
  },

  skills: async () => {
    const response = await fetch(`${API_BASE}/api/skills`);
    return response.json();
  },

  skillsByCategory: async (
    category: 'technical' | 'soft' | 'experience' | 'education'
  ) => {
    const response = await fetch(`${API_BASE}/api/skills/${category}`);
    return response.json();
  },

  health: async () => {
    const response = await fetch(`${API_BASE}/health`);
    return response.json();
  }
};
