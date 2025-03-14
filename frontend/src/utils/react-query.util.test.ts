import { expect, describe, it } from "vitest";
import { queryClient } from "./react-query.util";
import { QueryClient } from "@tanstack/react-query";

describe("queryClient", () => {
  it("should be an instance of QueryClient", () => {
    expect(queryClient).toBeInstanceOf(QueryClient);
  });

  it("should have default configuration", () => {
    const defaultOptions = queryClient.getDefaultOptions();
    expect(defaultOptions).toBeDefined();
  });

  it("should be able to clear cache", () => {
    queryClient.setQueryData(["test-key"], "test-data");
    expect(queryClient.getQueryData(["test-key"])).toBe("test-data");

    queryClient.clear();
    expect(queryClient.getQueryData(["test-key"])).toBeUndefined();
  });
});
