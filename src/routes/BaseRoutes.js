import { Routes, Route } from "react-router-dom";
import { HomePage, PostsPage } from "../pages";

const BaseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostsPage />} />
    </Routes>
  );
};

export default BaseRoutes;
