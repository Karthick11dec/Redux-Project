import { useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './Store/Store';
import Wrapper from './Components/Wrapper';

export const token = localStorage.getItem("token");
export const cID = "company_44a3f04d60ac451e86a22d26d15411a0";

function App() {

  useEffect(() => {

    //first api
    fetch("https://stage.api.sloovi.com/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: "good@test3.com",
        password: "12345678"
      })
    })
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        localStorage.setItem('token', res.results.token);
      })

    //second api 
    fetch(`https://stage.api.sloovi.com/user?company_id=${cID}`,
      {
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        localStorage.setItem("uID", res.results.user_id);
      })

    //third api
    fetch(`https://stage.api.sloovi.com/team?company_id=${cID}`,
      {
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.json())
      .then(res => {
        //may be here the problem was
        console.log(res);
      })


  }, [])

  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );

}

export default App;
