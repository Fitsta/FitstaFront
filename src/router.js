import { createWebHistory, createRouter } from "vue-router";
import Home from './components/home/Home.vue';
import Search from './components/search/SearchUser.vue';
import Post from './components/post/MakePost.vue';
import Reels from './components/reels/Reels.vue';
import Reels2 from './components/reels/Reels2.vue';
import Profile from './components/mypage/Profile.vue';
import UpdatePost from './components/post/UpdatePost.vue';
import UpdateProfile from './components/mypage/UpdateProfile.vue';
import Login from './components/enter/Login.vue'
import Enter from './components/enter/Enter.vue'
import Kakao from './components/enter/Kakao.vue'
import UserPostList from './components/home/UserPostList.vue'
import Comment from './components/comment/Comment.vue';
import FollowerInfo from './components/follow/FollowerInfo.vue'
import FollowingInfo from './components/follow/FollowingInfo.vue'


const routes = [
  {
    path: "/main",
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
    path: "/reels2",
    component: Reels2
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/update/:id",
    component: UpdatePost
  },
  {
    path: "/updateprofile",
    component: UpdateProfile
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/enter",
    alias:["/","/enter"],
    component: Enter
  },
  {
    path: "/detail/:id",
    component: UserPostList
  },
  {
    path: "/comment/:id",
    component: Comment
  },
  {
    path: "/kakao/:id",
    component: Kakao
  },
  {
    path: "/followerInfo/:id",
    component: FollowerInfo
  },
  {
    path: "/followingInfo/:id",
    component: FollowingInfo
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;