import { useEffect } from "react";

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
}

const DEFAULT_TITLE = "Proquoment Labs | Build for the Future. Become AI-Ready Today.";
const DEFAULT_DESCRIPTION =
  "We help ambitious startups build AI-powered products and help businesses prepare for an AI-powered future through intelligent software, automation, and modern engineering.";
const DEFAULT_CANONICAL = "https://labs.proquoment.in";
const DEFAULT_IMAGE = "https://labs.proquoment.in/opengraph.jpg";
const SITE_NAME = "Proquoment Labs";

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical = DEFAULT_CANONICAL,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // 2. Helper to set or create meta tag
    const setMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (isProperty) {
          el.setAttribute("property", name);
        } else {
          el.setAttribute("name", name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // 3. Helper to set or create link tag
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Standard Meta
    setMeta("description", description);
    setLink("canonical", canonical);

    // Robots
    if (noindex) {
      setMeta("robots", "noindex, follow");
    } else {
      setMeta("robots", "index, follow");
    }

    // OpenGraph
    setMeta("og:type", ogType, true);
    setMeta("og:site_name", SITE_NAME, true);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonical, true);
    setMeta("og:image", ogImage, true);

    // Twitter / X
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);
  }, [title, description, canonical, ogType, ogImage, noindex]);

  return null;
}

export default SEO;
