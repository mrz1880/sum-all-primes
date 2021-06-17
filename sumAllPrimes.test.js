const {
  sumPrimes,
  createListOfConsecutiveIntegersFrom2,
  crossOutEverySecondNumber,
} = require("./sumAllPrimes");
describe("Sum All Primes", () => {
  describe("sumPrimes()", () => {
    it("sumPrimes() should throw an error.", () => {
      const result = () => {
        sumPrimes();
      };
      expect(result).toThrow("You must provide a number.");
    });
    it("sumPrimes(1) should throw an error.", () => {
      const result = () => {
        sumPrimes(1);
      };
      expect(result).toThrow("You must provide a number greater than one.");
    });
    it("sumPrimes(10) should return a number.", () => {
      const result = sumPrimes(10);
      expect(result).toBeNumber();
    });

    it("sumPrimes(10) should return 17.", () => {
      const result = sumPrimes(10);
      expect(result).toBe(17);
    });
    it("sumPrimes(977) should return 73156.", () => {
      const result = sumPrimes(977);
      expect(result).toBe(73156);
    });
  });
});
