export default {
  github: 'https://github.com/roodboi/plugins.chat',
  docsRepositoryBase: 'https://github.com/roodboi/plugins.chat',
  titleSuffix: ' – plugins.chat',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">plugins.chat</span>
      <span className="text-gray-600 font-normal hidden md:inline"></span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="plugins.chat: the Next.js site builder"
      />
      <meta
        name="og:description"
        content="plugins.chat: the Next.js site builder"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://plugins.chat/og.png" />
      <meta name="twitter:site:domain" content="plugins.chat" />
      <meta name="twitter:url" content="https://plugins.chat" />
      <meta
        name="og:title"
        content="plugins.chat: Next.js static site generator"
      />
      <meta name="og:image" content="https://plugins.chat/og.png" />
      <meta name="apple-mobile-web-app-title" content="plugins.chat" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: (
    <>
      MIT {new Date().getFullYear()} © {` `}
      <a href="https://hack.dance" target="_blank" rel="noopener noreferrer">
        Hack Dance
      </a>
    </>
  ),
  unstable_faviconGlyph: '👋',
}
