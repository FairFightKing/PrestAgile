import type { NextPage } from 'next';
import styled from 'styled-components';
import Layout from '../ui/components/layout';
import BannerHomePage from '../ui/components/bannerHomePage';

const Home: NextPage = () => {
  return (
    <div>
      Page accueil Next Js.
      <BannerHomePage />
    </div>
  );
};

export default Home;
