import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { SubredditsList } from "../features/subreddits/SubredditsList";

export const Layout = () => {
  return (
    <div className="container-fluid bg-primary">
      <header>
        <Header />
      </header>
      <main className="App d-flex flex-row">
        <Outlet />
        <SubredditsList />
      </main>
    </div>
  );
};
