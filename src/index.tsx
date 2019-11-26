import React from "react";
const styles = require("./index.css");

// import Koala from "../images/Koala.jpg";
// import One from "../images/1.jpg";
// import two from "../images/2.jpg";
const three = require("../images/2.jpg");

const App = () => {
  return (
    <div>
      {[1, 2, 3].map(item => (
        <div key={item} className={styles.test}>
          {item}
        </div>
      ))}
      {/* <img width="200" height="200" src={Koala} alt="" /> */}
      <img
        width="200"
        height="200"
        src={require("../images/Koala.jpg")}
        alt=""
      />
      <img width="200" height="200" src={require("../images/1.jpg")} alt="" />
      {/* <img width="200" height="200" src={One} alt="" /> */}
      {/* <img width="200" height="200" src={two} alt="" /> */}
      <img width="200" height="200" src={three} alt="" />
    </div>
  );
};

export default App;
