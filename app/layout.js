import { FaustProvider } from '@faustjs/next';
import { client } from 'client';
import { Header, Hero, Footer } from 'components';

function Layout({ children }) {
  return (
    <FaustProvider client={client}>
      <Header />
      <Hero />
      {children}
      <Footer />
    </FaustProvider>
  );
}

export default Layout;
