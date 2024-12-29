async function responseApi() {
  try{
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${word}&${defaultParams}&per_page=50`);

    if(!response.ok) {
      throw new Error("fetch error");
    }

    const data = await response.json();

    return data.results;

  }catch(error) {
    console.log("error", error);
  }
}

export default responseApi;