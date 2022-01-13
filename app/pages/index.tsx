import type { NextPage } from 'next';
import styled from 'styled-components';
import Layout from '../ui/components/layout';
import BannerHomePage from '../ui/components/bannerHomePage';
import RecruitmentHomePage from '../ui/components/recruitmentHomePage';
import CategoryHomePage from '../ui/components/categoryHomePage';

const Home: NextPage = () => {
  return (
    <div>
      Page accueil Next Js.
      <BannerHomePage />
      <RecruitmentHomePage />
      <CategoryHomePage />
    </div>
  );
};

export default Home;
