import { describe, it, expect } from "vitest";
import { calculateCarbon } from "./calculateCarbon";

describe("calculateCarbon", () => {

  it("calculates carbon footprint correctly", () => {

    const result = calculateCarbon({
      transport: "Bus",
      distance: 20,
      electricity: 50,
      diet: "Vegetarian",
      waste: 4
    });

    expect(Number(result.total)).toBeGreaterThan(0);

  });

  it("score should never be negative", () => {

    const result = calculateCarbon({
      transport: "Car",
      distance: 1000,
      electricity: 1000,
      diet: "Non-Vegetarian",
      waste: 1000
    });

    expect(Number(result.score)).toBeGreaterThanOrEqual(0);

  });

});