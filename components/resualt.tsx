import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getZamirAndVerb } from "@/VerbUtils";

function Resualt({ Verbfi, Verbse, Verbth, Quantity, Person }) {
  const { zamir, Verb } = getZamirAndVerb(
    Person,
    Quantity,
    Verbth,
    Verbse,
    Verbfi
  );

  return (
    <div className="w-full flex items-center justify-center">
      <Tabs
        defaultValue="mazi"
        className="w-full flex items-center justify-center flex-col"
      >
        <TabsList className="bg-black border ">
          <TabsTrigger value="mazi">ماضی</TabsTrigger>
          <TabsTrigger value="mozare">مضارع</TabsTrigger>
          <TabsTrigger value="amr">امر</TabsTrigger>
        </TabsList>
        <TabsContent dir="rtl" value="mazi">
          <div className="flex flex-row gap-2">
            <p>{zamir}</p>|<p>{Verb}</p>
          </div>
        </TabsContent>
        <TabsContent dir="rtl" value="mozare">
          <div className="flex flex-row gap-2">
            <p>{zamir}</p>|<p>{Verb}</p>
          </div>
        </TabsContent>
        <TabsContent dir="rtl" value="amr">
          <div className="flex flex-row gap-2">
            <p>{zamir}</p>|<p>{Verb}</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Resualt;
