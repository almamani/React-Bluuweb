import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      <main>
        {navigation.state === "loading" && (
          <div className="alert alert-info my-5 container">Loading...</div>
        )}
        <Outlet />
      </main>
      {/* <footer className="container text-center">Footer</footer> */}
    </>
  );
};

export default LayoutPublic;
