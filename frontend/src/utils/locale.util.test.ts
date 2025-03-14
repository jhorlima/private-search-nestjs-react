import { expect, describe, it, beforeEach, afterEach } from "vitest";
import { localeRegex, getBrowserLocale } from "./locale.util";

describe("localeRegex", () => {
  it("should match valid language codes", () => {
    expect("en").toMatch(localeRegex);
    expect("pt").toMatch(localeRegex);
    expect("es").toMatch(localeRegex);
  });

  it("should match valid language-region codes", () => {
    expect("en-US").toMatch(localeRegex);
    expect("pt-BR").toMatch(localeRegex);
    expect("es-ES").toMatch(localeRegex);
  });

  it("should not match invalid language codes", () => {
    expect("e").not.toMatch(localeRegex);
    expect("eng").not.toMatch(localeRegex);
    expect("en_US").not.toMatch(localeRegex);
    expect("en-usa").not.toMatch(localeRegex);
    expect("123").not.toMatch(localeRegex);
    expect("").not.toMatch(localeRegex);
  });
});

describe("getBrowserLocale", () => {
  const originalNavigator = global.navigator;

  beforeEach(() => {
    Object.defineProperty(global, "navigator", {
      value: { language: "en-US" },
      configurable: true,
    });
  });

  afterEach(() => {
    Object.defineProperty(global, "navigator", {
      value: originalNavigator,
      configurable: true,
    });
  });

  it("should return browser's language", () => {
    expect(getBrowserLocale()).toBe("en-US");
  });

  it("should return 'en-US' when navigator.language is undefined", () => {
    Object.defineProperty(global, "navigator", {
      value: { language: undefined },
      configurable: true,
    });
    expect(getBrowserLocale()).toBe("en-US");
  });
});
