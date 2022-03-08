import { useEffect } from 'react';

export default function ExternalLink({ url }: { url: string }) {
  useEffect(() => {
    // create an a tag and simulate a click
    // this works across all browsers
    const a = document.createElement('a');
    // display none
    a.setAttribute('style', 'display: none;');
    // add the url
    a.setAttribute('href', url);
    // ensure it opens in a new tab
    a.setAttribute('target', '_blank');
    //  click on the a tag
    a.click();
    // go back to previous page
    window.history.back();
  }, []);

  return null;
}
