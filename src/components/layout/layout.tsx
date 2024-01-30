import MainHeader from "../MainHeader/MainHeader";
import { MainHeaderData } from "../MainHeader/MainHeader.mock";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader {...MainHeaderData} />
      {children}
      <></>
    </>
  );
};

export default Layout;
