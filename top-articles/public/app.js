(() => {
  window.addEventListener('load', (event) => {
    let articles;

    // Filter Article Topic
    const FAT = document.getElementById('filterArticleTopic');
    // Filter Article Order
    const FAO = document.getElementById('filterArticleOrder');

    FAT.addEventListener('change', updateArticleTopic);
    FAO.addEventListener('click', updateArticleOrder);

    async function updateArticleTopic() {
      let FATop = FAT.options[FAT.selectedIndex];
      let FATval = FATop.value;

      articles = await getArticles(FATval);
      printToPage(articles);
    }

    function updateArticleOrder() {
    }
  });
})();
