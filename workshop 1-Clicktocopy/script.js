const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")

// ดักจับ event ว่ามีการกดปุ่มคัดลอกหรือไม่ ? ถ้ามีให้ทำอะไร
btn.addEventListener("click",(e)=>{
    // console.log("เริ่มต้นคัดลอกข้อความ");
    coupon.select() // Function select
    coupon.setSelectionRange(0,999999) //กำหนดการ copy ตั้งแต่ตัวแรกไปถึงตัวสุดท้าย
    navigator.clipboard.writeText(coupon.value) //navigator is copy writeText isfunction
    btn.textContent="คัดลอกคูปองแล้ว!!"
    setTimeout(()=>{ // settime
        btn.textContent="คัดลอก"
    },3000) // เมื่อครบ3 วินาทีให้ show text  คัดลอก
})