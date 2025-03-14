import { expect, describe, it } from "vitest";
import { escapeUnsafeHtmlTags, joinClassNames } from "@utils/html.util";

describe("escapeUnsafeHtmlTags", () => {
  it("should escape unsafe tags while preserving allowed tags", () => {
    const input = '<p>Hello <script>alert("xss")</script> <div>World</div></p>';
    const allowedTags = ["p", "div"];
    const expected = `<p>Hello &lt;script&gt;alert("xss")&lt;/script&gt; <div>World</div></p>`;

    expect(escapeUnsafeHtmlTags(input, allowedTags)).toBe(expected);
  });

  it("should handle empty allowed tags array by escaping all tags", () => {
    const input = "<div>Test</div><p>Content</p>";
    const allowedTags: string[] = [];
    const expected = "&lt;div&gt;Test&lt;/div&gt;&lt;p&gt;Content&lt;/p&gt;";

    expect(escapeUnsafeHtmlTags(input, allowedTags)).toBe(expected);
  });

  it("should handle case-insensitive tag matching", () => {
    const input = "<DIV>Upper</DIV><div>Lower</div>";
    const allowedTags = ["div"];
    const expected = "<DIV>Upper</DIV><div>Lower</div>";

    expect(escapeUnsafeHtmlTags(input, allowedTags)).toBe(expected);
  });

  it("should handle tags with attributes", () => {
    const input = `<div class="test">Content</div><span id="unsafe">Text</span>`;
    const allowedTags = ["div"];
    const expected = `<div class="test">Content</div>&lt;span id="unsafe"&gt;Text&lt;/span&gt;`;

    expect(escapeUnsafeHtmlTags(input, allowedTags)).toBe(expected);
  });

  it("should handle nested tags correctly", () => {
    const input = "<div><span><b>Text</b></span></div>";
    const allowedTags = ["div"];
    const expected = `<div>&lt;span&gt;&lt;b&gt;Text&lt;/b&gt;&lt;/span&gt;</div>`;

    expect(escapeUnsafeHtmlTags(input, allowedTags)).toBe(expected);
  });

  it("should handle malformed HTML tags", () => {
    const input = "<div>Unclosed <span>Text</div>";
    const allowedTags = ["div"];
    const expected = "<div>Unclosed &lt;span&gt;Text</div>";

    expect(escapeUnsafeHtmlTags(input, allowedTags)).toBe(expected);
  });
});

describe("joinClassNames", () => {
  it("should join multiple class names with spaces", () => {
    const result = joinClassNames("class1", "class2", "class3");
    expect(result).toBe("class1 class2 class3");
  });

  it("should filter out falsy values", () => {
    const result = joinClassNames(
      "class1",
      null,
      undefined,
      "",
      false,
      "class2"
    );
    expect(result).toBe("class1 class2");
  });

  it("should handle single class name", () => {
    const result = joinClassNames("standalone");
    expect(result).toBe("standalone");
  });

  it("should return empty string when no valid class names", () => {
    const result = joinClassNames(null, undefined, false);
    expect(result).toBe("");
  });

  it("should handle number values", () => {
    const result = joinClassNames("class1", 1, "class2");
    expect(result).toBe("class1 1 class2");
  });
});
