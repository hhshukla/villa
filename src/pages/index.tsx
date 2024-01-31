import { MainHeaderData } from "@/components/MainHeader/MainHeader.mock";
import MainHeader from "@/components/MainHeader/MainHeader";
import Head from "next/head";
import Banner from "@/components/Banner/Banner";
import ContentBlock from "@/components/ContentBlock/ContentBlock";
import VideoComponent from "@/components/VideoComponent/VideoComponent";
import TabsDetail from "@/components/TabsDetail/TabsDetail";
import TabFilter from "@/components/TabFilter/TabFilter";
import Cards from "@/components/Cards/Cards";
import ContactUs from "@/components/ContactUs/ContactUs";
import SubHeader from "@/components/subHeader/subHeader";

export default function Home() {
  return (
    <>
      <Head>
        <title>Villa Agency</title>
        <link rel="icon" href="/Image/apple-touch-icon.png" sizes="any" />
      </Head>
      <SubHeader />
      <MainHeader />
      <Banner />
      <ContentBlock />
      <VideoComponent />
      <TabsDetail />
      <TabFilter />
      <Cards />
      <ContactUs />
    </>
  );
}
