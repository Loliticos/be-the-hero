const generateUniqueID = require("../../src/utils/generateUniqueID");

describe("Generate unique ID", () => {
    it("should generate an unique ID", () => {
        const id = generateUniqueID();

        expect(id).toHaveLength(8);
    });
});
