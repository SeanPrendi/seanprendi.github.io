import React from "react";
import MainPage from "./pages/mainpage";
import BlogPage from "./pages/blogpage";
import BlogPost from "./pages/blogpost";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import postlist from "./data/postlist.json";
import TopBar from "./components/topbar";

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          {postlist.map((post, idx) => {
            let name = post.name;
            return (
              <Route path={"/" + name} key={idx}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <BlogPost post={require("./posts/" + name + ".md")} />
                </div>
              </Route>
            );
          })}
        </Switch>
      </Router>
    </>
  );
}

export default App;
