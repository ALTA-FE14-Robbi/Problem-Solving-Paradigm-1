const lottery = require("./problem4");

test("Test 1", async () => {
  const randomNum = Math.ceil(Math.random() * 1000);
  try {
    const value = await lottery(randomNum);
    expect(value).toEqual("selamat anda mendapatkan hadiah utama berupa mobil");
  } catch (error) {
    expect(error).toEqual("maaf anda kurang beruntung");
  }
}, 30e3);
test("Test 2", async () => {
  const randomNum = Math.ceil(Math.random() * 1000);
  try {
    const value = await lottery(randomNum);
    expect(value).toEqual("selamat anda mendapatkan hadiah utama berupa mobil");
  } catch (error) {
    expect(error).toEqual("maaf anda kurang beruntung");
  }
}, 30e3);
