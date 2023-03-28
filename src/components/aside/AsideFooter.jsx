import React from "react";
import { Link } from "react-router-dom";

const AsideFooter = () => {
  return (
    <div className="flex flex-col gap-2 w-full text-[#536471]">
      <div className="flex w-full justify-between">
        <p>
          <Link
            className="hover:underline transition-all"
            to={"https://twitter.com/tos"}
            target={"_blank"}
          >
            Terms of Service
          </Link>
        </p>
        <p>
          <Link
            className="hover:underline transition-all"
            to={"https://twitter.com/privacy"}
            target={"_blank"}
          >
            Privacy Policy
          </Link>
        </p>
        <p>
          <Link
            className="hover:underline transition-all"
            to={"https://support.twitter.com/articles/20170514"}
            target={"_blank"}
          >
            Cookie Policy
          </Link>
        </p>
      </div>
      <div className="flex w-full gap-3 justify-between">
        <p>
          <Link
            className="hover:underline transition-all"
            to={"https://help.twitter.com/resources/accessibility"}
            target={"_blank"}
          >
            Accessibility
          </Link>
        </p>
        <p>
          <Link
            className="hover:underline transition-all"
            to={
              "https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo"
            }
            target={"_blank"}
          >
            Ads Info
          </Link>
        </p>
        <p>
          <Link
            className="hover:underline transition-all"
            to={"https://twitter.com/privacy"}
            target={"_blank"}
          >
            More ···
          </Link>
        </p>
        <p>
          <Link
            className="hover:underline transition-all"
            to={"https://twitter.com/privacy"}
            target={"_blank"}
          >
            © 2021 Twitter, Inc.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AsideFooter;
