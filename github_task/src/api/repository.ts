import api from './client';

interface IPrams {
  perPage?: Number;
  keyword?: String;
}

interface SearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
}

const fetchRepositories = async ({
  perPage = 10,
  keyword = '',
}: IPrams): Promise<Repository[]> => {
  try {
    const response = await api.get<SearchResponse>(
      `/search/repositories?q=${keyword}&sort=stars&order=desc&per_page=${perPage}`,
    );
    return response.data.items;
  } catch (error) {
    // TODO: Log error to monitoring services
    console.log('error read data:', error);
    return [];
  }
};

export {fetchRepositories};
