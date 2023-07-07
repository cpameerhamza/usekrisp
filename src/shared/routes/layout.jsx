import { useEffect } from "react";



function Layout({ title, Component }) {
  useEffect(() => {
    document.title = title + " | UseKrisp";
  });

  return (
    <>
      <Component />
    </>
  );
}

export default Layout;
