import {
  postList,
  generateGroupPosts,
  generatePostBlock
} from './templatePost.js';
const load = () => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((json) => {
      generatePostBlock.photoDescriptions = json;
      postList.appendChild(generateGroupPosts(json));
      return undefined;
    });
  return undefined;
};

export { load };
