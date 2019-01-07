import App, { Container } from 'next/app';

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <p>hello, I am on every page!</p>
        <Component />
      </Container>
    );
  }
}

export default MyApp;
