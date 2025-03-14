import { expect, describe, it } from "vitest";
import { sha1 } from "./sha1.util";

describe("sha1", () => {
  it("should generate correct SHA-1 hash for empty string", async () => {
    const hash = await sha1("");
    expect(hash).toBe("da39a3ee5e6b4b0d3255bfef95601890afd80709");
  });

  it("should generate correct SHA-1 hash for a simple string", async () => {
    const hash = await sha1("test");
    expect(hash).toBe("a94a8fe5ccb19ba61c4c0873d391e987982fbbd3");
  });

  it("should generate correct SHA-1 hash for a string with special characters", async () => {
    const hash = await sha1("test!@#$%^&*()");
    expect(hash).toBe("a125813674eb7914e5244a5922bad8877669a4a2");
  });

  it("should generate correct SHA-1 hash for a long string", async () => {
    const longString = "a".repeat(1000);
    const hash = await sha1(longString);
    expect(hash).toHaveLength(40); // SHA-1 hashes are always 40 characters long
    expect(hash).toMatch(/^[0-9a-f]{40}$/); // SHA-1 hashes only contain hexadecimal characters
  });

  it("should generate different hashes for different strings", async () => {
    const hash1 = await sha1("test1");
    const hash2 = await sha1("test2");
    expect(hash1).not.toBe(hash2);
  });

  it("should generate consistent hashes for the same input", async () => {
    const input = "test string";
    const hash1 = await sha1(input);
    const hash2 = await sha1(input);
    expect(hash1).toBe(hash2);
  });
});
