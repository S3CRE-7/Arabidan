"use client";
import { useState, useEffect } from "react";
import Resualt from "@/components/resualt";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function MyForm() {
  const [step, setStep] = useState(1);
  const [Verbfi, setVerbfi] = useState("");
  const [Verbse, setVerbse] = useState("");
  const [Verbth, setVerbth] = useState("");
  const [quantity, setQuantity] = useState("");
  const [person, setPerson] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const filledFieldsCount = [Verbfi, Verbse, Verbth].filter(
      (value) => value !== ""
    ).length;
    const filledSelectsCount = [quantity, person].filter(
      (value) => value !== ""
    ).length;
    const totalFields = 3;
    const totalSelects = 2;
    const totalFilled = filledFieldsCount + filledSelectsCount;
    const total = totalFields + totalSelects;
    const calculatedProgress = (totalFilled / total) * 100;
    setProgress(calculatedProgress);
  }, [Verbfi, Verbse, Verbth, quantity, person]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value);
  };

  const handlePersonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="border h-full relative w-full relative overflow-hidden rounded-md p-3 pt-7 flex items-center flex-col justify-start">
      {step === 1 && (
        <div className="flex absolute h-[90%] items-center justify-between flex-col gap-10">
          <Progress
            value={progress}
            className="bg-[#39393b] bg-opacity-[.5] mb-10"
          />
          <form
            className="flex flex-col items-center justify-center h-full "
            onSubmit={handleSubmit}
          >
            <h1 className="w-full text-right px-3">بن فعل</h1>
            <div className="flex flex-row gap-5 m-3 mb-7">
              <input
                type="text"
                value={Verbfi}
                onChange={(e) =>
                  setVerbfi(e.target.value.replace(/[^؀-ۿ]/g, ""))
                }
                maxLength={1}
                className="border bg-transparent rounded-md w-[50px] h-[50px] text-center text-xl"
              />

              <input
                type="text"
                value={Verbse}
                maxLength={1}
                onChange={(e) =>
                  setVerbse(e.target.value.replace(/[^؀-ۿ]/g, ""))
                }
                className="border bg-transparent rounded-md w-[50px] h-[50px] text-center text-xl"
              />

              <input
                type="text"
                value={Verbth}
                maxLength={1}
                onChange={(e) =>
                  setVerbth(e.target.value.replace(/[^؀-ۿ]/g, ""))
                }
                className="border bg-transparent rounded-md w-[50px] h-[50px] text-center text-xl"
              />
            </div>
            <div className="w-full flex flex-row gap-3 items-center justify-center">
              <select
                className="bg-black border rounded-md p-1 text-sm"
                value={quantity}
                onChange={handleQuantityChange}
              >
                <option value="">تعداد</option>
                <option value="Singular">مفرد</option>
                <option value="Plural">جمع</option>
              </select>
              <select
                className="bg-black border rounded-md p-1 text-sm"
                value={person}
                onChange={handlePersonChange}
              >
                <option value="">شخص</option>
                <option value="first">اول شخص</option>
                <option value="second">دوم شخص</option>
                <option value="third">سوم شخص</option>
              </select>
            </div>
          </form>
          <Button
            variant={"outline"}
            disabled={progress < 100}
            onClick={handleNextStep}
          >
            بساز
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="h-full w-full flex items-center justify-center flex-col gap-10">
          <Resualt
            Verbfi={Verbfi}
            Verbse={Verbse}
            Verbth={Verbth}
            Quantity={quantity}
            Person={person}
          />
          <Button variant={"outline"} onClick={handlePreviousStep}>
            برگشت
          </Button>
        </div>
      )}
      <div className="text-[12px] text-gray-500 absolute bottom-0 left-0 px-5 flex flex-row items-center justify-between w-full">
        <Drawer>
          <DrawerTrigger>راهنما</DrawerTrigger>
          <DrawerContent className="h-full bg-transparent backdrop-blur-[2px] flex items-center px-10 text-white">
            <DrawerHeader>
              <DrawerTitle>راهنما</DrawerTitle>
            </DrawerHeader>
            <p className="text-end text-sm text-gray-500">
              *.این برنامه صرفا برای یاد می گیری می باشد*
            </p>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">برگشت</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <p>0.1.0v</p>
      </div>
    </div>
  );
}

export default MyForm;
