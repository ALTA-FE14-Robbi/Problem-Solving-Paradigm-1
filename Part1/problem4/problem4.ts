function lottery(num: number): Promise<string> {
  console.log("Undian lotre dimulai...");
  console.log("Sedang mengundi nomor anda...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum: number = Math.floor(Math.random() * 1000) + 1;
      if (num === randomNum) {
        resolve(`Selamat anda mendapatkan hadiah utama berupa mobil, dengan nomor undian: ${num}`);
      } else {
        reject(`Maaf anda kurang beruntung, dengan nomor undian: ${randomNum}`);
      }
    }, 10000);
  });
}

lottery(5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Undian lotre telah berakhir..."));
