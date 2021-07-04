import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import ViewProfile from "../components/ViewProfile";
import EditProfile from "../components/EditProfile";

// const Profiles = () => {
//   return <h1>Perfiles</h1>;
// };
const Profiles = (props) => {
  const { login, history } = props;
  const { path, url } = props.match;

  console.log(444, login, history, path, url);

  useEffect(() => {
    if (!login) {
      history.push("/");
    }
  }, [login]);
  return (
    <>
      <ul>
        <li>
          <Link to={`${url}/viewprofile`}>Ver Perfiles</Link>
        </li>
        <li>
          <Link to={`${url}/editprofile`}>Editar Perfiles</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/viewprofile`} component={ViewProfile} />
        <Route path={`${path}/editprofile`} component={EditProfile} />
      </Switch>
    </>
  );
};

export default Profiles;
