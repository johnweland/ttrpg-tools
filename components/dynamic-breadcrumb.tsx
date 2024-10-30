"use client";
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
          <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        {pathNames.length > 0 && (
          <>
            <BreadcrumbSeparator className="hidden md:block" />
            {pathNames.map((path, index) =>
              path !== "dashboard" ? ( // only needed if dashboard is a path and not the root site
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink href="#">
                    {path[0].toUpperCase() + path.slice(1)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ) : null,
            )}
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
