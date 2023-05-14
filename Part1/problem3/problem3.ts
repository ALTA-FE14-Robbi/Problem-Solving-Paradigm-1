const jajanBoba = (uang: number, callback: any): void => {
    let boba = 5000;
    if (uang - boba < 0) {
        console.log("Maaf uang kamu tidak cukup untuk membeli boba");
        setTimeout(() => {
            console.log(`Sisa uang kamu Rp ${uang}`);
        }, 1000);
    } else {
        uang = uang - boba;
        console.log(`Kamu jajan boba dengan harga Rp ${boba}`);
        setTimeout(() => {
            callback(uang);
        }, 5000);
    };
};

const jajanSeblak = (uang: number) => {
    let seblak = 8000;
    console.log(`Sisa uang kamu Rp ${uang}`);
    console.log(`Kamu jajan seblak dengan harga Rp ${seblak}`);
    setTimeout(() => {
        if (uang < seblak) {
            console.log("Maaf uang kamu tidak cukup untuk membeli seblak");
        } else {
            uang = uang - seblak;
        }
        console.log(`Sisa uang kamu Rp ${uang}`);
    }, 9000);
};


jajanBoba(20000, jajanSeblak);
jajanBoba(10000, jajanSeblak);