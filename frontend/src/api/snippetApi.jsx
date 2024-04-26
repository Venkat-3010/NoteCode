import axios from 'axios';

const BASE_URL = 'https://fantastic-meme-g6gq54q674p2v7x-4000.app.github.dev/api/snippets';

const snippetApi = {
  createSnippet: async (snippetData) => {
    try {
      const response = await axios.post(BASE_URL, snippetData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create snippet');
    }
  },

  updateSnippet: async (snippetId, snippetData) => {
    try {
      const response = await axios.put(`${BASE_URL}/${snippetId}`, snippetData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update snippet');
    }
  },

  getSnippetById: async (snippetId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${snippetId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch snippet');
    }
  },
};

export default snippetApi;
