import { createWebHistory, createRouter } from "vue-router";
import Home from './components/home/Home.vue';
import Search from './components/search/SearchUser.vue';
import Post from './components/post/MakePost.vue';
import Reels from './components/reels/Reels.vue';
import Profile from './components/mypage/Profile.vue';
import UpdatePost from './components/post/UpdatePost.vue';
import UpdateProfile from './components/mypage/UpdateProfile.vue';
import Enter from './components/enter/Enter.vue'
import UserPostList from './components/home/UserPostList.vue'
import Comment from './components/comment/Comment.vue';

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/search",
    component: Search
  },
  {
    path: "/regist",
    component: Post
  },
  {
    path: "/reels",
    component: Reels
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/update",
    component: UpdatePost
  },
  {
    path: "/updateprofile",
    component: UpdateProfile
  },
  {
    path: "/enter",
    component: Enter
  },
  {
    path: "/detail/:id",
    component: UserPostList
  },
  {
    path: "/comment/:id",
    component: Comment
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;