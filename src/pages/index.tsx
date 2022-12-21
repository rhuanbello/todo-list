import type { NextPage } from "next";

import { Header } from "src/components/Header";
import { SectionTasks } from "src/components/SectionTasks";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <SectionTasks />
    </>
  );
};

export default Home;
