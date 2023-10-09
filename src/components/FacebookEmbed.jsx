import React, { useEffect } from 'react';

const FacebookEmbed = () => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="fb-embed-container">
      <div className="fb-page" data-href="https://www.facebook.com/rainbowhimachal" data-tabs="timeline" width="500" data-height="1040" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
        <blockquote cite="https://www.facebook.com/rainbowhimachal" className="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/rainbowhimachal">Page Name</a>
        </blockquote>
      </div>
    </div>
  );
};

export default FacebookEmbed;