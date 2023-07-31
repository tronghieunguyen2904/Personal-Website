import Profile from "./Footer";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          padding: "20px",
          height: "100",
        }}
      >
        <div style={{ display: "flex" }}>
          {" "}
          <Header />
          <Profile />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
