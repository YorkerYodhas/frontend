import { getSession } from 'next-auth/react';

export default async function federatedSignOut(req: any, res: any) {
  // Get the site base url.
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

  try {
    // We need to get the session to get the id token.
    const session = await getSession({ req });
    console.log('the session is ', session);

    if (!session) {
      // Redirect the user to root if there is no session.
      return res.redirect(baseUrl);
    }

    // Add the Asgardeo logout endpoint.
    const endSessionURL = process.env.LOGOUT_ENDPOINT;
    // And the redirect url.
    const redirectURL = process.env.NEXT_PUBLIC_ASGARDEO_POST_LOGOUT_REDIRECT_URI!;
    // Construct the query params for the logout endpoint.
    const endSessionParams = new URLSearchParams({
      // Pass the original id token the to the provider.
      id_token_hint: session.idToken,
      // Pass the redirect url.
      post_logout_redirect_uri: redirectURL,
    });
    // Construct the full url for the logout endpoint.
    const fullUrl = `${endSessionURL}?${endSessionParams.toString()}`;
    // Call the logout endpoint with the query params. This will clear the session.
    return res.redirect(fullUrl);
  } catch (error) {
    res.redirect(baseUrl);
  }
}
