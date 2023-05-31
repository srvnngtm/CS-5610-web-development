import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import HomeScreen from "./home-screen";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
  return (
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
          </Routes>
        </div>
        <div className="d-none d-lg-block col-lg-4 mt-2 mb-2 p-0 ps-2">
         <WhoToFollowList/>
        </div>
      </div>
    </div>
  );
}
export default Tuiter;
