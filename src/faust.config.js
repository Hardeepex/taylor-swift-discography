import { config as coreConfig } from '@faustjs/core';

if (!process.env.NEXT_PUBLIC_WORDPRESS_URL) {
  console.error(
    'The NEXT_PUBLIC_WORDPRESS_URL environment variable is not set. This variable should be the URL of the WordPress backend that the application fetches data from. Define NEXT_PUBLIC_WORDPRESS_URL in your .env.local file in the root of the project.',
  );
}

/**
 * @type {import("@faustjs/core").Config}
 */
export default coreConfig({
  wpUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL,
  apiClientSecret: process.env.FAUSTWP_SECRET_KEY,
});
