import { request as pwRequest } from "@playwright/test";
import { config } from "dotenv";

config();

export const API_BASE = "https://reqres.in/api";

const API_KEY: string = process.env.API_KEY || "reqres-free-v1";

export async function createApiContext(includeApiKey: boolean = true) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (includeApiKey) {
    headers["x-api-key"] = API_KEY;
  }

  return await pwRequest.newContext({
    extraHTTPHeaders: headers,
  });
}
