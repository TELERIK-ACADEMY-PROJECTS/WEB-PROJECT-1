export const toTrendingView = (trending) => {
    const gifs = trending.data.map((gif) => `
    <div class="trending-gif">
      <img src="${gif.images.fixed_height.url}">
      <button class="view-trending-details-btn" data-trending-details-id="${gif.id}">Gif Details</button>
    </div>
  `).join('');
  
  return `
    <div id="trending">
      <h1>Trending GIFs</h1>
      <div class="trending-gifs-container">
        ${gifs}
      </div>
    </div>
  `
};