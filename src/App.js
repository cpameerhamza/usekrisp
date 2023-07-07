import "./app.css";
import AuthRoute from "./shared/routes/authRoutes";

const App = () => {
  return (
    <>
      <div id="wrapper">
        <AuthRoute />
      </div>
    </>
  );
}

export default App;