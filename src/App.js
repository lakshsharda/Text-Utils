// import { useState } from "react";
// import "./App.css";
// // import About from "./components/About";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import Alert from "./components/Alert";

// // Importing required components from react-router-dom

// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   const [Mode, setMode] = useState("light"); // Mode state for dark/light mode
//   const [alert, setAlert] = useState(null); // Alert state to handle alerts

//   const showAlert = (message, type) => {
//     setAlert({
//       message: message,
//       type: type,
//     });

//     // Automatically clear the alert after 2 seconds
//     setTimeout(() => {
//       setAlert(null);
//     }, 2000);
//   };

//   // Function to toggle dark/light mode
//   const toggleMode = () => {
//     if (Mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "black";
//       document.body.style.color = "white";
//       showAlert("Dark mode has been enabled", "success");
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       document.body.style.color = "black";
//       showAlert("Light mode has been enabled", "success");
//     }
//   };

//   return (
//     <>
//       {/* <Router> */}
//         <Navbar
//           title="Textutils"
//           aboutText="About TextUtils"
//           mode={Mode}
//           toggleMode={toggleMode}
//         />

//         <Alert alert={alert} />

//         <div className="container my-3">
//           {/* <Routes> */}
//             {/* <Route exact path="/about" element={<About />} /> */}
//             {/* <Route
//               exact path="/"
//               element={ */}
//                 <TextForm
//                   heading="Enter your text here to analyze"
//                   mode={Mode}
//                   showAlert={showAlert}
//                 />
//               {/* }
//             /> */}
//           {/* </Routes> */}
//         </div>
//       {/* // </Router> */}
//     </>
//   );
// }

// export default App;



import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";




function App() {
  const [Mode, setMode] = useState("light"); // Mode state for dark/light mode
  const [alert, setAlert] = useState(null); // Alert state to handle alerts

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    // Automatically clear the alert after 2 seconds
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="Textutils"
        aboutText="About TextUtils"
        mode={Mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter your text here to analyze"
          mode={Mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
