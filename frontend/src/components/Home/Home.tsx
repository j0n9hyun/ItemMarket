import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../../static/scss/home.scss';
import Footer from './Footer';
import Header from './Header';
import Section from './Section';
const Home = () => {
  return (
    <>
      <Helmet>
        <title>쫑마켓 | Home</title>
      </Helmet>
      <Header />
      <Section />
      <Footer />
    </>
  );
};

export default Home;
