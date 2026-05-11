// tests.js

const expect = chai.expect;

// ==========================
// INTEGER → ROMAN
// ==========================
describe('integerToRoman', function() {

  it('should convert 1 to "I"', function() {
    expect(integerToRoman(1)).to.equal('I');
  });

  it('should convert 4 to "IV"', function() {
    expect(integerToRoman(4)).to.equal('IV');
  });

  it('should convert 9 to "IX"', function() {
    expect(integerToRoman(9)).to.equal('IX');
  });

  it('should convert 14 to "XIV"', function() {
    expect(integerToRoman(14)).to.equal('XIV');
  });

  it('should convert 44 to "XLIV"', function() {
    expect(integerToRoman(44)).to.equal('XLIV');
  });

  it('should convert 99 to "XCIX"', function() {
    expect(integerToRoman(99)).to.equal('XCIX');
  });

  it('should convert 1994 to "MCMXCIV"', function() {
    expect(integerToRoman(1994)).to.equal('MCMXCIV');
  });

  it('should convert 3999 to "MMMCMXCIX"', function() {
    expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
  });

  it('should throw error for 0', function() {
    expect(() => integerToRoman(0)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw error for negative numbers', function() {
    expect(() => integerToRoman(-5)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw error for numbers > 3999', function() {
    expect(() => integerToRoman(4000)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw error for NaN', function() {
    expect(() => integerToRoman("abc")).to.throw();
  });

});

// ==========================
// ROMAN → INTEGER
// ==========================
describe('romanToInteger', function() {

  it('should convert "I" to 1', function() {
    expect(romanToInteger('I')).to.equal(1);
  });

  it('should convert "X" to 10', function() {
    expect(romanToInteger('X')).to.equal(10);
  });

  it('should convert "IV" to 4', function() {
    expect(romanToInteger('IV')).to.equal(4);
  });

  it('should convert "IX" to 9', function() {
    expect(romanToInteger('IX')).to.equal(9);
  });

  it('should convert "XIV" to 14', function() {
    expect(romanToInteger('XIV')).to.equal(14);
  });

  it('should convert "MCMXCIV" to 1994', function() {
    expect(romanToInteger('MCMXCIV')).to.equal(1994);
  });

  it('should convert lowercase input', function() {
    expect(romanToInteger('xiv')).to.equal(14);
  });

  it('should throw error for invalid character', function() {
    expect(() => romanToInteger('A')).to.throw("Input must be a valid Roman numeral.");
  });

  it('should throw error for empty string', function() {
    expect(() => romanToInteger('')).to.throw("Input must be a valid Roman numeral.");
  });

  it('should throw error for numeric string', function() {
    expect(() => romanToInteger('123')).to.throw();
  });

  // ⚠️ Este test FALLARÁ por tu bug
  it('should convert "V" to 5', function() {
    expect(romanToInteger('V')).to.equal(5);
  });

});