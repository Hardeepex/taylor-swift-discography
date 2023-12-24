
import { client } from 'client';
import Layout from '../app/layout';

export default function Page(): JSX.Element {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (<main className="content content-page">
    
      <main className="content content-page">
        <div className="wrap">
          <div>
            <div>
              <p>
                The page you were looking for does not exist or is no longer
                available.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
