(() => {
  window.addEventListener('load', (event) => {
    let articles;
    // Filter Article Topic
    const FAT = document.getElementById('filterArticleTopic');
    // Filter Article Order
    const FAO = document.getElementById('filterArticleOrder');

    FAT.addEventListener('change', updateArticleTopic);
    FAO.addEventListener('change', updateArticleOrder);

    async function updateArticleTopic() {
      let FATop = FAT.options[FAT.selectedIndex];
      let FATval = FATop.value;

      articles = await getArticles(FATval);
      console.log(articles);
      cleanedArticles = await cleanSortData(articles);
      printToPage(cleanedArticles);
    }

    function updateArticleOrder() {
      let FAOop = FAO.options[FAO.selectedIndex];
      let FAOval = FAOop.value;
      console.log(articles);

      // Reorder the arrays based on the sorted order
      const reorderedArticles = {};
      sortedArrays.forEach((key) => {
        reorderedArticles[key] = articles[key];
      });
      if ("oldest" == FAOval) {
        const sortedArrays = Object.keys(articles).sort((a, b) => {
          const dateA = getFirstCreatedDate(articles[a]);
          const dateB = getFirstCreatedDate(articles[b]);
  
          if (dateA && dateB) {
            return dateA - dateB;
          } else {
            // Handle cases where createdDate is not present or arrays are empty
            return 0;
          }
        });
      } else {
        articles.sort((a, b) => {
          return (b.createdDate) - (a.createdDate);
        });
      }
      printToPage(articles);
    }
    updateArticleTopic();
  });
})();
