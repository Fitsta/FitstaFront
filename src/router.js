import { createWebHistory, createRouter } from "vue-router";
import Home from './components/home/Home.vue';
import Search from './components/search/SearchUser.vue';
import Post from './components/post/MakePost.vue';
import Reels from './components/reels/Reels.vue';
import Profile from './components/mypage/Profile.vue';
import UpdatePost from './components/post/UpdatePost.vue';
import UpdateProfile from './components/mypage/UpdateProfile.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;