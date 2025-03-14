import { expect, describe, it } from "vitest";
import { formatDateWithTime } from "./date.util";

describe("formatDateWithTime", () => {
  it("should format date with time in short style", () => {
    const testDate = new Date("2023-05-15T14:30:00");
    const formatted = formatDateWithTime(testDate);
    expect(formatted).toBe("5/15/23, 2:30 PM");
  });

  it("should format date with specific locale", () => {
    const testDate = new Date("2023-05-15T14:30:00");
    const formatted = formatDateWithTime(testDate, "pt-BR");
    expect(formatted).toBe("15/05/2023, 14:30");
  });

  it("should handle midnight time", () => {
    const testDate = new Date("2023-05-15T00:00:00");
    const formatted = formatDateWithTime(testDate);
    expect(formatted).toBe("5/15/23, 12:00 AM");
  });

  it("should handle noon time", () => {
    const testDate = new Date("2023-05-15T12:00:00");
    const formatted = formatDateWithTime(testDate);
    expect(formatted).toBe("5/15/23, 12:00 PM");
  });

  it("should handle dates across year boundary", () => {
    const testDate = new Date("2023-12-31T23:59:00");
    const formatted = formatDateWithTime(testDate);
    expect(formatted).toBe("12/31/23, 11:59 PM");
  });
});
