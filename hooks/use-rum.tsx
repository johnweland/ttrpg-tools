"use client";
import { AwsRum, AwsRumConfig } from "aws-rum-web";
import { useEffect } from "react";

export function Rum() {
  useEffect(() => {
    try {
      const config: AwsRumConfig = {
        sessionSampleRate: 1,
        identityPoolId: "us-east-1:1ccbcf50-0659-44aa-b476-e1986d0d3efc",
        endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
        telemetries: ["performance", "errors", "http", "interaction"],
        allowCookies: true,
        enableXRay: true,
      };

      const APPLICATION_ID: string = "d804f171-0fb6-4310-92ee-ff34955011ec";
      const APPLICATION_VERSION: string = `${process.env.npm_package_version}`;
      const APPLICATION_REGION: string = "us-east-1";

      const awsRum: AwsRum = new AwsRum(
        APPLICATION_ID,
        APPLICATION_VERSION,
        APPLICATION_REGION,
        config,
      );
    } catch (error) {
      console.error("Error initializing AWS RUM", error);
    }
  }, []);
  return null;
}
