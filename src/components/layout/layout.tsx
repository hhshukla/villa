import MainHeader from "../MainHeader/MainHeader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      {children}
      <></>
    </>
  );
};

export default Layout;
