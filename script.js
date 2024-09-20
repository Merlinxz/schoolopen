// เรียกใช้งาน Luxon
const DateTime = luxon.DateTime;

// กำหนดวันที่เป้าหมาย (22 ตุลาคม 2567) ใน Timezone ของประเทศไทย
const targetDate = DateTime.fromISO('2024-10-22T00:00:00', { zone: 'Asia/Bangkok' });

// อัพเดททุกๆ วินาที
const countdownFunction = setInterval(function() {
    // เวลาปัจจุบันใน Timezone ของประเทศไทย
    const now = DateTime.now().setZone('Asia/Bangkok');

    // คำนวณเวลาที่เหลือ
    const diff = targetDate.diff(now, ['days', 'hours', 'minutes', 'seconds']);

    // แสดงผลใน element
    document.getElementById("days").innerHTML = Math.floor(diff.days);
    document.getElementById("hours").innerHTML = Math.floor(diff.hours);
    document.getElementById("minutes").innerHTML = Math.floor(diff.minutes);
    document.getElementById("seconds").innerHTML = Math.floor(diff.seconds);

    // หากหมดเวลา
    if (diff.toMillis() <= 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown").innerHTML = "หมดเวลาแล้ว!";
    }
}, 1000);