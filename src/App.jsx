import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./page/router";
import DefaultLayout from "./Layout/DefaultLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {routes.map((route, index) => {
            const Layout = DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    {route.identifier ? (
                      <Page identifier={route.identifier} />
                    ) : (
                      <Page />
                    )}
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
