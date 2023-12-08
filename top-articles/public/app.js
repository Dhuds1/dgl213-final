window.addEventListener('load', (event) => {
  const app = feathers();
  const restClient = feathers.rest();

  app.configure(restClient.fetch(window.fetch.bind(window)));
  const APIKEY = "7hp2yHHL4WzLNuVvtVlkoOmvsCP6mwQp";
  const APILINK = `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${APIKEY}`;
  
  // Filter Article Topic
  const FAT = document.getElementById('filterArticleTopic');
  // Filter Article Order
  const FAO = document.getElementById('filterArticleOrder');

  FAT.addEventListener('change', updateArticleTopic());
  FAO.addEventListener('change', updateArticleOrder());

  function updateArticleTopic (){

  }
  function updateArticleOrder(){

  }
})();