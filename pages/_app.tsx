import React from "react";
import App, { Container } from "next/app";
import Store from "stores";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Sidebar from "components/sidebar";
import Card from "components/card";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: sans-serif;
    font-size: 14px;
    background: #f3f3f3;
  }
`;

const Body = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;

  .submit {
    background: #393434;
    color: #fff;
    font-size: 0.8rem;
  }
`;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={{}}>
        <Store.Provider>
          <GlobalStyles />
          <Container>
            <Body>
              <Component {...pageProps} />
              <Sidebar>
                <Card title="Advertise Here">
                  <img src="https://via.placeholder.com/300x600?text=Advertise Here" />
                </Card>
              </Sidebar>
            </Body>
          </Container>
        </Store.Provider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
