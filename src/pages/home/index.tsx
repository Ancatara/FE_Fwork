import Footer from 'components/layout/footer';
import Header from 'components/layout/header';
import LandingPage from 'pages/LandingPage/LadingPage';
import * as React from 'react';

export interface  HomePageProps {
}

export default function HomePage (props:  HomePageProps) {
  return (
    <div>
      <LandingPage/>
    </div>
  );
}
