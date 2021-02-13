
import {postList, generateGroupPosts} from './templatePost.js';
import {generateArrayPosts} from './generation.js';

postList.appendChild(generateGroupPosts(generateArrayPosts(25)));
