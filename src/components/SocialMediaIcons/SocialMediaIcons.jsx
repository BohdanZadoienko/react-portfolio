import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={require("../../assets/linkedin.png")} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/nellymakedonska"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={require("../../assets/twitter.png")} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/profile.php?id=100014078166407"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={require("../../assets/facebook.png")} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/nelly_makedonska/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={require("../../assets/instagram.png")} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
