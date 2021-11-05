import "./style.css";
import { useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect, useParams } from "react-router-dom";

import Controls from "./Controls";
import Doc from "./Doc";

function Main() {
  const { isAuthenticated } = useAuth0();
  const { file } = useParams();
  const docRef = useRef(null);

  if (!isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="main-container">
      <Controls docRef={docRef} file={file} />
      <Doc docRef={docRef} file={file} />
    </div>
  );
}

export default Main;