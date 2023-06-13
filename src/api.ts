import axios from 'axios';

export const API_URL = 'http://localhost:8000'; // substitua pela URL da sua API

interface Dado {
  id: number;
  nome: string;
}

export const api = async (): Promise<Dado[]> => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
    throw error;
  }
};

// Adicione outras funções para outras rotas da API, como postDados, deleteDados, etc.
