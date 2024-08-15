function hitungVoucher(voucher, totalBelanja, uangDibayar) {
    let potongan = 0;
    let maksimalDiskon = 0;
    let minimalBelanja = 0;

    if (voucher === "DumbWaysJos") {
        potongan = 0.211; // 21,1%
        maksimalDiskon = 20000;
        minimalBelanja = 50000;
    } else if (voucher === "DumbWaysMantap") {
        potongan = 0.30; // 30%
        maksimalDiskon = 40000;
        minimalBelanja = 80000;
    } else {
        console.log("Voucher tidak valid");
        return;
    }

    if (totalBelanja < minimalBelanja) {
        console.log(`Minimal belanja untuk menggunakan voucher ini adalah Rp ${minimalBelanja}`);
        return;
    }

    let diskon = totalBelanja * potongan;
    if (diskon > maksimalDiskon) {
        diskon = maksimalDiskon;
    }

    let totalBayar = totalBelanja - diskon;
    let kembalian = uangDibayar - totalBayar;

    console.log(`Uang yang harus dibayar: Rp ${totalBayar}`);
    console.log(`Diskon: Rp ${diskon}`);
    console.log(`Kembalian: Rp ${kembalian}`);
}

hitungVoucher("DumbWaysJos", 100000, 100000);
hitungVoucher("DumbWaysMantap", 100000, 100000);
