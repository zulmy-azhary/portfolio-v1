import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { Scroll, useScroll } from "@context";
import styled from "styled-components";
import {
  Home,
  Biography,
  Projects,
  Technology,
  Footer,
  Profile,
  Navbar,
  Loader,
} from "@components";
import { comicNeue, jost } from "@styles/GlobalStyles";
import { AnimatePresence, motion } from "framer-motion";

const Container = styled.main`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    flex-direction: row;
  }
`;

const Wrapper = styled.div<Scroll>`
  transition-duration: 500ms;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    flex-basis: 70%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    flex-basis: ${(props) => (props.scroll ? "75%" : "65%")};
  }
`;

const ProfileWrapper = styled.div<Scroll>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    flex-basis: 30%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    flex-basis: ${(props) => (props.scroll ? "25%" : "35%")};
  }
`;

const Main = styled.div`
  padding: 0 1.25rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 0 4rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    padding: 0 7.5rem 7rem;
  }
`;

const HomePage: NextPage = () => {
  const { scroll } = useScroll();
  const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <>
      <Head>
        <title>Zulmy Azhary | Front End Developer</title>
        <meta name="description" content="Hi! I'm Zulmy Azhary and this is my personal portfolio" />
        <meta name="theme-color" content="#070731" />
      </Head>
      <AnimatePresence mode="wait" initial={false}>
        {isLoading ? (
          <Loader key="loader" setLoading={setLoading} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <Navbar />
            <Container className={`${jost.variable} ${comicNeue.variable}`}>
              <Wrapper scroll={scroll}>
                <Main>
                  <Home />
                  <Biography />
                  <Projects />
                  <Technology />
                </Main>
                <Footer />
              </Wrapper>
              <ProfileWrapper scroll={scroll}>
                <Profile />
              </ProfileWrapper>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomePage;
