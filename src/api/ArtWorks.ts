const artWorksApi = async (page: number, limit: number) => {
  const resp = await fetch(
    `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`,
  );
  const respJson = resp.json();
  return respJson;
};
export {artWorksApi};
