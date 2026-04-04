import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import DefaultLogo from "../assets/Footerimg/Logo.svg";

const SITE_NAME = "Happymindz";
const DEFAULT_DESCRIPTION =
  "Happymindz provides senior care, wellness, community programs, and personalized support for active ageing.";

const getBaseUrl = () => {
  const envUrl = import.meta.env.VITE_SITE_URL;
  if (envUrl) return envUrl.replace(/\/$/, "");
  if (typeof window !== "undefined") return window.location.origin;
  return "";
};

const normalizeUrl = (baseUrl, path) => {
  if (!path) return baseUrl;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (!baseUrl) return path;
  const cleanedBase = baseUrl.replace(/\/$/, "");
  const cleanedPath = path.startsWith("/") ? path : `/${path}`;
  return `${cleanedBase}${cleanedPath}`;
};

function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DefaultLogo,
  canonical,
  ogType = "website",
  schema = "webpage",
  schemaName,
  schemaServiceType,
}) {
  const location = useLocation();
  const baseUrl = getBaseUrl();
  const canonicalPath = canonical || location.pathname;
  const canonicalUrl = normalizeUrl(baseUrl, canonicalPath);
  const imageUrl = normalizeUrl(baseUrl, image);
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  const jsonLd = (() => {
    if (!schema) return null;
    if (schema === "organization") {
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: baseUrl || canonicalUrl,
        logo: imageUrl,
      };
    }
    if (schema === "service") {
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: schemaName || title || SITE_NAME,
        serviceType: schemaServiceType || schemaName || title || SITE_NAME,
        description,
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: baseUrl || canonicalUrl,
        },
        url: canonicalUrl,
      };
    }
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageTitle,
      description,
      url: canonicalUrl,
    };
  })();

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

export default Seo;
