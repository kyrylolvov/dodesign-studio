import type { NextPage } from 'next';
import Head from 'next/head';

import { PageContent, PageContainer, PageTitle } from './css';

const About: NextPage = () => (
    <PageContainer>
      <Head>
        <title>About - DoDesign</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContent>
        <PageTitle>About</PageTitle>
      </PageContent>
    </PageContainer>
);

export default About;
