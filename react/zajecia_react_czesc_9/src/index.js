import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/00_Home.js'
import Invoices from './components/01_Invoices';
import Invoice from './components/02_Invoice';
import InvoicesNavLink from './components/03_NavLink';
import InvoicesSearch from './components/04_SearchParam';
import InvoiceDelete from './components/05_Deletion';


// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>servicesample
//         <Route path="/" element={<App />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </BrowserRouter>,
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>servicesample
//         <Route path="/" element={<App />} >
//           <Route path="home" element={<Home />} />   
//         </Route>
//       </Routes>
//     </BrowserRouter>,
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>servicesample
//         <Route path="/" element={<App />} >
//           <Route path="home" element={<Home />} />
//           <Route path="invoices" element={<Invoices />} />
//           <Route
//             path="*"
//             element={
//               <main style={{ padding: "1rem" }}>
//                 <p>There's nothing here!</p>
//               </main>
//             }
//           />
//         </Route>
//       </Routes>
//     </BrowserRouter>,
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>servicesample
//         <Route path="/" element={<App />} >
//           <Route path="home" element={<Home />} />

//           <Route path="invoices" element={<Invoices />}>
//             <Route path=":invoiceId" element={<Invoice />} />
//           </Route>

//           <Route
//             path="*"
//             element={
//               <main style={{ padding: "1rem" }}>
//                 <p>There's nothing here!</p>
//               </main>
//             }
//           />
//         </Route>
//       </Routes>
//     </BrowserRouter>,
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route path="invoices" element={<Invoices />}>
//             <Route
//               index
//               element={
//                 <main style={{ padding: "1rem" }}>
//                   <p>Select an invoice</p>
//                 </main>
//               }
//             />
//             <Route path=":invoiceId" element={<Invoice />} />
//           </Route>
//           <Route
//             path="*"
//             element={
//               <main style={{ padding: "1rem" }}>
//                 <p>There's nothing here!</p>
//               </main>
//             }
//           />
//         </Route>
//       </Routes>
//     </BrowserRouter>,
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route path="invoices" element={<InvoicesNavLink />}>
//             <Route
//               index
//               element={
//                 <main style={{ padding: "1rem" }}>
//                   <p>Select an invoice</p>
//                 </main>
//               }
//             />
//             <Route path=":invoiceId" element={<Invoice />} />
//           </Route>
//           <Route
//             path="*"
//             element={
//               <main style={{ padding: "1rem" }}>
//                 <p>There's nothing here!</p>
//               </main>
//             }
//           />
//         </Route>
//       </Routes>
//     </BrowserRouter>,
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route path="invoices" element={<InvoicesSearch />}>
//             <Route
//               index
//               element={
//                 <main style={{ padding: "1rem" }}>
//                   <p>Select an invoice</p>
//                 </main>
//               }
//             />
//             <Route path=":invoiceId" element={<Invoice />} />
//           </Route>
//           <Route
//             path="*"
//             element={
//               <main style={{ padding: "1rem" }}>
//                 <p>There's nothing here!</p>
//               </main>
//             }
//           />
//         </Route>
//       </Routes>
//     </BrowserRouter>,
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="invoices" element={<InvoicesSearch />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<InvoiceDelete />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
