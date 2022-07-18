import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Breadcrumbs() {
  const router = useRouter();

  const breadcrumbs = useMemo(() => {
    // Remove any query parameters, as those aren't included in breadcrumbs
    const asPathWithoutQuery = router.asPath.split("?")[0];

    // Break down the path between "/"s, removing empty entities
    // Ex:"/my/nested/path" --> ["my", "nested", "path"]
    const asPathNestedRoutes = asPathWithoutQuery
      .split("/")
      .filter((v) => v.length > 0);

    // Iterate over the list of nested route parts and build
    // a "crumb" object for each one.
    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      // We can get the partial nested route for the crumb
      // by joining together the path parts up to this point.
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      // The title will just be the route string for now
      const text = subpath
        .replace("-", " ")
        .replace("_", " ")
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.substring(1))
        .join(" ");
      return { href, text };
    });

    // Add in a default "Home" crumb for the top-level
    return [{ href: "/", text: "Home" }, ...crumblist];
  }, [router.asPath]);

  return (
    <nav class="rounded-md w-full">
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </nav>
  );
}

// Each individual "crumb" in the breadcrumbs list
function Crumb({ text, href, last = false }) {
  // The last crumb is rendered as normal text since we are already on the page
  if (last) {
    return <span>{text}</span>;
  }

  // All other crumbs will be rendered as links that can be visited
  return (
    <>
      <Link href={href}>{text}</Link>
      <span class="mx-1">/</span>
    </>
  );
}
