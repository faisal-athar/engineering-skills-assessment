const { deterministicPartitionKey } = require("./dpk");
let crypto = require("crypto");


describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it('uses the provided partitionKey if it exists', () => {
    const event = { partitionKey: 'dummy-partition-key' };
    const result = deterministicPartitionKey(event);
    expect(result).toBe('dummy-partition-key');
  });

  it('hashes the event object if no partitionKey is provided', () => {
    const event = { notKey: 'not-key' };
    const expectedHash = crypto.createHash('sha3-512').update(JSON.stringify(event)).digest('hex');
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expectedHash);
  });

  it('stringifies the candidate if it is not a string', () => {
    const event = { partitionKey: { a: 1, b: 2 } };
    const expectedResult = JSON.stringify(event.partitionKey);
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expectedResult);
  });

  test("hashes long partitionKey using sha3-512", () => {
    const longKey = "a".repeat(300);
    const event = { partitionKey: longKey };
    const hash = crypto.createHash("sha3-512").update(longKey).digest("hex");
    expect(deterministicPartitionKey(event)).toEqual(hash);
  });

});
