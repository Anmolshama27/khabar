export const fetchData = async () => {
    try {
      const response = await fetch("https://newsapi.org/v2/everything?q=apple&from=2021-03-29&to=2021-03-29&sortBy=popularity&apiKey=ee641c8628ef4e249e4c0594ab9c3e3a");
      const data = await response.json();
    
      return data.articles;
    } catch (e) {
      console.log(e);
    }
  };