import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PostsPage from "../pages/PostsPage";

const BaseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostsPage />} />
    </Routes>
  );
};

export default BaseRoutes;
