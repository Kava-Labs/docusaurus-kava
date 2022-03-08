import { useEffect } from 'react';

export default function ExternalLink({ url }: { url: string }) {
  useEffect(() => {
    // open url in new tab and go to the new tab
    window.open(url, '__blank').focus();
    // in the docs page go back to where the user was before clicking the link
    // since this page is going to be empty
    window.history.back();
  }, []);

  return null;
}
