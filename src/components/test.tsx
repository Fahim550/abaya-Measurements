"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import abaya from "@/src/assets/abaya3.png";
import { CheckCircle2, RotateCcw, Ruler } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface Measurement {
  neckWidth:string,
  shoulderWidth:string,
  sleevesWidth: string;
  bust: string;
  waist: string;
  hip: string;
  itemLength: string;
  sleevesFromShoulder: string;
  // sleevesFromNeck: string;
  arms: string;
}

const MeasurementInput = ({
  label,
  name,
  value,
  onChange,
  className,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}) => (
  <div
    className={`absolute group transition-all duration-300 hover:z-10 ${className}`}
  >
    <div className="flex flex-col items-center">
      <span className="bg-white/95 backdrop-blur-sm px-1 rounded-t text-[9px] sm:text-[10px] font-bold text-blue-600 uppercase tracking-tighter border border-blue-100 shadow-sm">
        {label}
      </span>
      <Input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        placeholder="0"
        className="w-10 h-7 sm:w-16 sm:h-8 text-center text-xs border-blue-100 focus-visible:ring-blue-400 bg-white/95 shadow-md rounded-t-none p-1"
      />
    </div>
  </div>
);

const AbayaMeasurementForm = () => {
  const [measurements, setMeasurements] = useState<Measurement>({
    neckWidth:"",
    shoulderWidth:"",
    // sleevesFromNeck: "",
    arms: "",
    sleevesWidth: "",
    bust: "",
    waist: "",
    hip: "",
    itemLength: "",
    sleevesFromShoulder: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeasurements((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saving Measurements:", measurements);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-2 md:p-8 lg:p-12 overflow-auto">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 p-4 md:p-8 bg-slate-50 min-h-screen">
        <div className="w-full lg:flex-1 order-2 lg:order-1">
          <div className="bg-white p-4 sm:p-4 rounded-3xl shadow-xl border border-slate-200">
            <div className="relative overflow-x-auto pb-4">
              <div className="inline-block min-w-[500px] lg:w-full rounded-2xl border border-slate-100">
                <div className="relative mt-5">
                  <Image
                    src={abaya}
                    alt="Abaya Measurement Guide"
                    className="w-full h-auto object-contain"
                    priority
                  />

                  <MeasurementInput
                    label="Neck"
                    name="neckWidth"
                    value={measurements.neckWidth}
                    onChange={handleChange}
                    className="-top-[2.7%] sm:top[0%] md:top[5%] right-[57%]"
                  />
                  <MeasurementInput
                    label="shoulder"
                    name="shoulderWidth"
                    value={measurements.shoulderWidth}
                    onChange={handleChange}
                    className="top-[8%] left-[24%]"
                  />

                  <MeasurementInput
                    label="Cuff"
                    name="sleevesWidth"
                    value={measurements.sleevesWidth}
                    onChange={handleChange}
                    className="top-[16%] right-[3%]"
                  />
                  {/* <MeasurementInput
                    label="Sleece Form Neck"
                    name="sleevesFromNeck"
                    value={measurements.sleevesFromNeck}
                    onChange={handleChange}
                    className="top-[8%] right-[25%]"
                  /> */}
                  <MeasurementInput
                    label="Arms"
                    name="arms"
                    value={measurements.arms}
                    onChange={handleChange}
                    className="top-[10%] right-[43%]"
                  />
                  <MeasurementInput
                    label="Bust"
                    name="bust"
                    value={measurements.bust}
                    onChange={handleChange}
                    className="top-[22%] right-[48%]"
                  />
                  <MeasurementInput
                    label="Waist"
                    name="waist"
                    value={measurements.waist}
                    onChange={handleChange}
                    className="top-[30%] right-[48%]"
                  />
                  <MeasurementInput
                    label="Hip"
                    name="hip"
                    value={measurements.hip}
                    onChange={handleChange}
                    className="top-[41%] right-[43%]"
                  />
                  <MeasurementInput
                    label="Sleeve"
                    name="sleevesFromShoulder"
                    value={measurements.sleevesFromShoulder}
                    onChange={handleChange}
                    className="top-[20%] left-[8%]"
                  />
                  <MeasurementInput
                    label="Length"
                    name="itemLength"
                    value={measurements.itemLength}
                    onChange={handleChange}
                    className="bottom-[35%] left-[39%]"
                  />
                </div>
              </div>
            </div>

            <p className="text-center text-[10px] text-slate-400 mt-1 lg:hidden italic">
              Swipe left ↔ right to view full image
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: The Data Panel */}
        <div className="w-full lg:w-[400px] flex flex-col gap-6 order-1 lg:order-2 sticky lg:top-8 overflow-hidden">
          <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Ruler className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-800 tracking-tight">
                  Size Details
                </h2>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  setMeasurements({
                    neckWidth:"",
                    shoulderWidth:"",
                    sleevesWidth: "",
                    bust: "",
                    waist: "",
                    hip: "",
                    itemLength: "",
                    sleevesFromShoulder: "",
                    // sleevesFromNeck: "",
                    arms: "",
                  })
                }
                className="h-8 px-2 text-slate-400 hover:text-red-500 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  Reset
                </span>
              </Button>
            </div>

            <p className="text-sm text-slate-500 mb-6 leading-relaxed border-l-4 border-blue-500 pl-4 bg-slate-50 py-2 rounded-r-lg">
              Adjust measurements directly on the image or check the summary
              below.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:gap-y-4 max-h-[40vh] lg:max-h-none overflow-y-auto pr-2">
              {Object.entries(measurements).map(([key, value]) => (
                <div
                  key={key}
                  className="group border-b border-slate-50 pb-2 transition-colors hover:border-blue-100"
                >
                  <Label className="text-[9px] text-slate-400 uppercase tracking-widest font-bold group-hover:text-blue-500 transition-colors">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </Label>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-semibold text-slate-800">
                      {value || "0"}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      in
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={handleSave}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-6 flex gap-2 shadow-lg shadow-blue-100 transition-all active:scale-95"
            >
              <CheckCircle2 className="w-5 h-5" />
              Confirm Measurements
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbayaMeasurementForm;
