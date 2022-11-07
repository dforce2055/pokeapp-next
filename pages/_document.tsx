import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html
        lang="en"
        data-theme="dark"
        className="dark"
      >
        <Head />
        <body
          className="
          bg-gradient-to-br from-gray-100 to-slate-200 text-gray-500
          dark:bg-gradient-to-br dark:from-gray-800 dark:to-slate-900 dark:text-gray-200"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument