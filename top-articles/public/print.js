function printToPage(articles) {
  let articleWrapper = document.getElementById('articleContainer');
  let resultTitle = document.getElementById('results');
  resultTitle.textContent = `${articles.num} results for '${articles.section}'`
  articles.forEach(data => {
    let wrapper = document.createElement('div');
    wrapper.classList.add('results__container-item');

    let imgWrapper = document.createElement('div');
    imgWrapper.classList.add('results__container-item--img');

    let img = document.createElement('img');
    img.setAttribute('src', data.media.url);
    img.setAttribute('alt', data.media.alt);

    let textWrapper = document.createElement('div');
    textWrapper.classList.add('results__container-item--text');

    let title = document.createElement('h3');
    title.classList.add('results__container-item--title');
    title.textContent = data.title;

    let description = document.createElement('p');
    description.classList.add('results__container-item--description');
    description.textContent = data.abstract; // Assuming abstract is the correct property name

    let link = document.createElement('a');
    link.classList.add('results__container-item--link');
    link.href = data.url; // Set the href attribute instead of textContent
    link.textContent = 'Read more';

    // Append graphic content
    imgWrapper.appendChild(img);

    // Append text content
    textWrapper.appendChild(title);
    textWrapper.appendChild(description);
    textWrapper.appendChild(link);

    // Append content to item wrapper
    wrapper.appendChild(imgWrapper);
    wrapper.appendChild(textWrapper);

    // Append the wrapper to the articleWrapper
    articleWrapper.appendChild(wrapper);
  });
}
