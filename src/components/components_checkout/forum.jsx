import React from "react";
import { Link } from "react-router-dom";

function Forum() {
  return (
    <form id="informUser" className="mb-[55px]">
      <div className="flex flex-col  border border-[#E1E1E1] rounded-[20px]  px-6 pt-[28px] pb-10 text-base">
        <p className="font-semibold text-2xl mb-6 ">กรอกข้อมูล</p>
        <label className="font-medium text-lg ">ข้อมูลผู้ขับขี่</label>
        <input
          type="text"
          placeholder="ชื่อจริง"
          className="  h-[56px] mt-6  px-5 rounded-2xl border border-[#E1E1E1] font-medium "
        />
        <input
          type="text"
          placeholder="นามสกุล"
          className=" h-[56px] mt-[32px]  px-5 rounded-2xl border border-[#E1E1E1] font-medium"
        />
        <input
          type="email"
          placeholder="อีเมล์"
          className=" h-[56px] mt-[32px]  px-5 rounded-2xl border border-[#E1E1E1]  font-medium"
        />
        <input
          type="text"
          placeholder="จุดประสงค์ในการใช้รถ"
          className=" h-[56px] mt-[32px]  px-5 rounded-2xl border border-[#E1E1E1] font-medium"
        />
        <input
          type="text"
          placeholder="ข้อมูลเพิ่มเติม (ถ้ามี)"
          className=" h-[56px] mt-[32px]  px-5 rounded-2xl border border-[#E1E1E1]  font-medium"
        />
      </div>
      <div
        id="hire"
        className="mt-10  px-6 pt-3 pb-4  grid grid-cols-1 grid-rows-2 border border-[#E1E1E1] rounded-[20px]"
      >
        <div className="flex  ">
          <input type="checkbox" className="h-4 w-4 mr-2 mt-1" />
          <label>กรุณาตรวจสอบข้อมูลการเช่าให้ครบถ้วนก่อนการกดยืนยัน</label>
        </div>
        <Link
          to="/Checkout2"
          className=" h-[48px] bg-[#3E5685] rounded-[10px] text-white text-2xl flex justify-center"
        >
          <input
            type="submit"
            value="เช่ารถคันนี้"
            className="cursor-pointer border-none text-lg"
          />
        </Link>
      </div>
    </form>
  );
}

export default Forum;
