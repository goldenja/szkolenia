function PropsDrillling() {
  const userName = "John Smith";
  return (
    <Layout userName={userName}>
      Main content
    </Layout>
  );
}
function Layout({ children, userName }) {
  return (
    <div>
      <Header userName={userName} />
      <main>
        {children}
      </main>
    </div>
  )
}
function Header({ userName }) {
  return (
    <header>
      <UserInfo userName={userName} />
    </header>
  );
}
function UserInfo({ userName }) {
  return <span>{userName}</span>;
}

export default PropsDrillling;