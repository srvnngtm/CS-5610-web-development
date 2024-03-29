import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import HomeScreen from "./home-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitReducer from "./reducers/tuit-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";

import tuitReducerForExplore from "./reducers/tuit-reducer-for-explore";
const store = configureStore({
  reducer: {
    who: whoReducer,
    tuits: tuitReducer,
    tuitExplore: tuitReducerForExplore,
    user:  authReducer,
  },
});

function Tuiter() {
  return (
    <Provider store={store}>
      <div className="container">
        <Nav />
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="d-block col-10 col-sm-10 col-lg-6 col-xl-6 wd-float-left mt-2 wd px-2">
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/login"    element={<LoginScreen    />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/profile"  element={<ProfileScreen  />} />

            </Routes>
          </div>
          <div className="d-none d-lg-block col-lg-4 mt-2 mb-2 p-0 ps-2">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;
