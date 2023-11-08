const konversiWaktu = (waktuAMPM) => {
    const [waktu, ampm] = waktuAMPM.split(/(?=[APap][Mm])/);
    const [jam, menit, detik] = waktu.split(":");
   
    let jam24 = parseInt(jam);

    if (ampm.toLowerCase() === "pm" && jam24 <= 12) {
        jam24 += 12;
    } else if (ampm.toLowerCase() === "am" && jam24 === 12) {
        jam24 = 0;
    }

    return `${String(jam24).padStart(2, '0')}:${menit}:${detik}`;
};

// Contoh penggunaan fungsi

console.log(konversiWaktu("07:05:45PM"));
