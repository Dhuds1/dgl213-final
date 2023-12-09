let articles;
let orderByNewest = true;

(() => {
  window.addEventListener('load', (event) => {
    // Filter Article Topic
    const FAT = document.getElementById('filterArticleTopic');
    // Filter Article Order
    const FAO = document.getElementById('filterArticleOrder');

    FAT.addEventListener('change', updateArticleTopic);
    FAO.addEventListener('change', changeOrder);

    async function updateArticleTopic() {
      // Get users selected topic
      let FATop = FAT.options[FAT.selectedIndex];
      let FATval = FATop.value;

      // retrieves articles from NYT based on user topic, if none selected "home" by default
      messyData = await getArticles(FATval);
      // Reorders retrieved data into an array, keeping needed values
      articles = await cleanSortData(messyData);
      // Send to this function to change sorting order
      updateArticleOrder();
    }
    function changeOrder() {
      // Get input option from user, and change the orderByNewest boolean
      let FAOop = FAO.options[FAO.selectedIndex];
      let FAOval = FAOop.value;
      if ("newest" === FAOval) {
        orderByNewest = true;
      } else {
        orderByNewest = false;
      }
      updateArticleOrder();
    }
    function updateArticleOrder() {
      if (orderByNewest) {
        // if orderByNewest === true, display newest article first
        for (let i = 0; i < articles.length; ++i) {
          for (let j = i + 1; j < articles.length; ++j) {
            if (articles[i].createdDate < articles[j].createdDate) {
              [articles[i], articles[j]] = [articles[j], articles[i]];
            }
          }
        }
      } else {
        // if orderByNewest === false, display oldest article first
        for (let i = 0; i < articles.length; ++i) {
          for (let j = i + 1; j < articles.length; ++j) {
            if (articles[i].createdDate > articles[j].createdDate) {
              [articles[i], articles[j]] = [articles[j], articles[i]];
            }
          }
        }
      }
    
      printToPage(articles);
    }    
    updateArticleTopic();
  });
})();
