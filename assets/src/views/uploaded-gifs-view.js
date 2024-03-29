import { renderFavoriteStatus } from '../events/favorite-events.js';
/**
 * Renders an uploaded GIFs in the specified container.
 *  @param {Array} uploaded - An array of uploaded GIFs.
 * @return {void}
 */
export const toUploadedGifsView = (uploaded) => {
  const gifs = uploaded.map((gif) => `
  <div class="image-container">
    <img src="${gif.data.images.fixed_height.url}">
      <div class="button-container">
      <button class="view-trending-details-btn" data-trending-details-id="${gif.data.id}">View Details</button>
      <button class="favorites-button">${renderFavoriteStatus(gif.data.id)}</button>
    </div>
  </div>  
`).join('');

  return `
  <div id="trending">   
    <div class="trending-gifs-container">
      ${gifs|| '<p class="upload-form-message">Upload some GIF to see them here.</p>'}
    </div>
  </div>
  `;
};
