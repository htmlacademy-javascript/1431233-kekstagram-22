
import {setupPostList, generateGroupPosts} from './templatepost.js';
import {generateArrayPosts} from './generation.js';

setupPostList.appendChild(generateGroupPosts(generateArrayPosts(25)));
