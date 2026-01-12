"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import abaya from "@/src/assets/abaya.jpg";
import { CheckCircle2, Ruler } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface Measurement {
  sleevesWidth: string;
  bust: string;
  waist: string;
  hip: string;
  itemLength: string;
  sleevesFromShoulder: string;
  sleevesFromNeck: string;
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
    className={`absolute group transition-all duration-300 hover:scale-105 ${className}`}
  >
    <div className="flex flex-col items-center">
      <span className="bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-t text-[10px] font-bold text-gray-500 uppercase tracking-tighter border border-b-0 border-blue-200">
        {label}
      </span>
      <Input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder="0.00"
        className="w-16 h-8 text-center text-xs border-blue-200 focus-visible:ring-blue-200 bg-white/95 shadow-sm rounded-t-none"
      />
    </div>
  </div>
);

const AbayaMeasurementForm = () => {
  const [measurements, setMeasurements] = useState<Measurement>({
    sleevesWidth: "",
    bust: "",
    waist: "",
    hip: "",
    itemLength: "",
    sleevesFromShoulder: "",
    sleevesFromNeck: "",
    arms: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeasurements((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saving Measurements:", measurements);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-8 p-6 bg-slate-50 min-h-screen font-sans">
      <div className="relative w-full max-w-xl bg-white p-4 shadow-2xl rounded-2xl border border-slate-200">
        <div className="relative overflow-hidden rounded-xl border border-slate-100">
          <Image
            src={abaya}
            alt="Abaya Measurement Guide"
            className="w-full h-auto object-cover"
          />

          <MeasurementInput
            label="Cuff"
            name="sleevesWidth"
            value={measurements.sleevesWidth}
            onChange={handleChange}
            className="top-[16%] right-[3%]"
          />
          <MeasurementInput
            label="Neck"
            name="sleevesFromNeck"
            value={measurements.sleevesFromNeck}
            onChange={handleChange}
            className="top-[8%] right-[25%]"
          />
          <MeasurementInput
            label="Arms"
            name="arms"
            value={measurements.arms}
            onChange={handleChange}
            className="top-[9%] right-[44%]"
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
            className="top-[20%] left-[6%]"
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

      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 mb-6">
          <Ruler className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-800">Size Details</h2>
          <Button
            onClick={() =>
              setMeasurements({
                sleevesWidth: "",
                bust: "",
                waist: "",
                hip: "",
                itemLength: "",
                sleevesFromShoulder: "",
                sleevesFromNeck: "",
                arms: "",
              })
            }
            className="ml-auto px-2 py-1 bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-600 text-[10px] font-bold uppercase tracking-tight rounded transition-colors duration-200"
          >
            Clear All
          </Button>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-sm text-slate-500 leading-relaxed italic border-l-2 border-blue-200 pl-3">
            Please enter your measurements in inches for a custom-tailored fit.
          </p>

          {/* Professional Summary Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4 border-t border-slate-100">
            {Object.entries(measurements).map(([key, value]) => (
              <div key={key} className="border-b border-slate-50 pb-1">
                <Label className="text-[10px] text-slate-400 uppercase tracking-wider">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </Label>
                <p className="font-semibold text-slate-800 tabular-nums">
                  {value ? `${value}"` : "--"}
                </p>
              </div>
            ))}
          </div>
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
  );
};

export default AbayaMeasurementForm;
