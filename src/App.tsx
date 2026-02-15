import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LibraryPage } from "./pages/LibraryPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PostsPage } from "./pages/PostsPage";

const AoC2025Page = lazy(() =>
  import("./pages/posts/AoC2025Page").then((m) => ({ default: m.AoC2025Page }))
);

export function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/AoC2025" element={<AoC2025Page />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
