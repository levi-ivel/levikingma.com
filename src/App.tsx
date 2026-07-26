import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LibraryPage } from "./pages/LibraryPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PostsPage } from "./pages/PostsPage";

const AoC2025Page = lazy(() =>
  import("./pages/posts/the-2025-advent-of-code-showdown").then((m) => ({ default: m.AoC2025Page }))
);
const ObjPage = lazy(() =>
  import("./pages/posts/towards-perfect-note-taking").then((m) => ({ default: m.ObjPage }))
);

export function App() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route exact path="/posts/the-2025-advent-of-code-showdown" component={AoC2025Page} />
        <Route exact path="/posts/towards-perfect-note-taking" component={ObjPage} />
        <Route exact path="/library" component={LibraryPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}
