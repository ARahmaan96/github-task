import api from './client'; // Assuming this imports an API client for making requests

interface IPrams {
  perPage?: number;
  keyword?: string; // Make keyword required
  language?: string;
  date?: string;
}

interface SearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
}
function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns month from 0 to 11
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

const fetchRepositories = async ({
  perPage = 10,
  keyword, // Keyword is now required
  language = '',
  date = '',
}: IPrams): Promise<Repository[]> => {
  try {
    if (!keyword) {
      keyword = 'stars:%3E1';
    }
    let query = `/search/repositories?q=${keyword}`;
    if (language && language.toLocaleLowerCase() !== 'any') {
      query += `+language:${language}`;
    }
    if (date) {
      // // Format the date according to ISO 8601 standard (YYYY-MM-DD)
      const formattedDate = formatDate(new Date(date));
      query += `+created_at:${formattedDate}`;
    }
    query += `&sort=stars&order=desc&per_page=${perPage}`;

    const response = await api.get<SearchResponse>(query);
    return response.data.items;
  } catch (error) {
    // TODO: Log error to monitoring services
    console.log('error read data:', error);
    return [];
  }
};

export {fetchRepositories};
