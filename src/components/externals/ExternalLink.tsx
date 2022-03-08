import { useEffect } from 'react';

export default function ExternalLink({ url }: { url: string }) {
  useEffect(() => {
    // create an a element and simulate a click
    // this works across all browsers
    const a = document.createElement('a');
    a.setAttribute('style', 'display: none;');
    a.setAttribute('rel', 'noopener');
    a.setAttribute('target', 'about:blank');
    a.setAttribute('href', url);
    a.click();
    // go back to previous page
    window.history.back();
  }, []);

  return null;
}
