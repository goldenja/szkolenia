import { useContext, createContext } from 'react';
const UserContext = createContext('Unknown');

function UseContextSimple() {
  const userName = "John Smith";
  return (
    <UserContext.Provider value={userName}>
      <Layout>
        Main content
      </Layout>
    </UserContext.Provider>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}
function Header() {
  return (
    <header>
      <UserInfo />
    </header>
  );
}
function UserInfo() {
  const userName = useContext(UserContext);
  return <span>{userName}</span>;
}

// function UserInfo() {
//   return(
//   <UserContext.Consumer>
//       {(value) => (
//        <span>{value}</span>
//       )}
//   </UserContext.Consumer>);
// }

export default UseContextSimple;