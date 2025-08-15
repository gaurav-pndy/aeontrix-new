import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const SeoBreadcrumbs = () => {
  const location = useLocation();

  const nameMap = {
    "": "Home",
    "privacy-policy": "Privacy Policy",
    "refund-policy": "Refund Policy",
    "terms-of-service": "Terms of Service",
    "blogs": "Blogs",
    "solutions": "Solutions",
    "industries": "Industries",
    "unsubscribe": "Unsubscribe",
    "newsletter": "Newsletter",
  };

  const pathnames = location.pathname.split("/").filter(Boolean);

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://aeontrix.com",
    },
    ...pathnames.map((segment, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;
      const readableName = nameMap[segment] || decodeURIComponent(segment).replace(/-/g, " ");
      return {
        "@type": "ListItem",
        position: index + 2,
        name: readableName.charAt(0).toUpperCase() + readableName.slice(1),
        item: `https://aeontrix.com${path}`,
      };
    }),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SeoBreadcrumbs;
