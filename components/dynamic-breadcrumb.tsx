"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function DynamicBreadCrumb() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href={"/dashboard"}>Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        {pathNames.length > 0 &&
          pathNames.map((path, index) =>
            path !== "dashboard" ? ( // only needed if dashboard is a path and not the root site
              <React.Fragment key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={
                      `${paths.substring(0, paths.lastIndexOf(pathNames[index]))}` +
                      `${path}`
                    }
                  >
                    {path.charAt(0).toUpperCase() + path.slice(1)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            ) : null,
          )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
