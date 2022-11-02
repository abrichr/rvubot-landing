import Document, { Html, Head, Main, NextScript } from 'next/document';

class OverriddenDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-na1.hs-scripts.com/21588713.js"
          ></script>
        </body>
      </Html>
    );
  }
}

export default OverriddenDocument;
