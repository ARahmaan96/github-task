import api from './client';

interface IPrams {
  perPage?: Number;
  keyword?: String;
}

const fetchRepositories = async ({perPage = 10, keyword = ''}: IPrams) => {
  try {
    const response = await api.get(
      `/search/repositories?q=${keyword}&sort=stars&order=desc&per_page=${perPage}`,
    );
    return response.data.items;
  } catch (error) {
    // TODO: Log error to monitoring services
    console.log('error read data:', error);
  }
};

export {fetchRepositories};
