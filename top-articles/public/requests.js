const APIKEY = "xexdfSWH2UVGknlSx9U3QCO4wPb1sEj2";
let topic;

async function getArticles(topic) {
   try {
      const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${APIKEY}`);
      if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data;
   } catch (error) {
      console.error('Fetch error:', error);
   }
}
function cleanSortData(data) {
   let articles = [];
   data.results.forEach(article => {
      let media = article.multimedia?.[0] || false;
      let content = {
         title: article.title,
         section: article.section,
         abstract: article.abstract,
         media: media ? { url: media.url, alt: media.caption } : null,
         createdDate: article.created_date,
         updatedDate: article.updated_date,
         byline: article.byline,
         url: article.url,
      };
      articles += {
         num: article.num_results,
         section: article.section,
      }
      articles.push(content);
   });
   return articles;
}
