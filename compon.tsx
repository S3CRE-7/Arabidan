<Select dir="rtl">
<SelectTrigger className="w-full">
  <SelectValue placeholder="شخص مورد نظر" />
</SelectTrigger>
<SelectContent dir="rtl" className="bg-black text-white">
  <SelectItem value="firstp">اول شخص</SelectItem>
  <SelectItem value="secondp">دوم شخص</SelectItem>
  <SelectItem value="thirdp">سوم شخص</SelectItem>
</SelectContent>
</Select>
<Select dir="rtl">
<SelectTrigger className="w-fit">
  <SelectValue placeholder="تعداد" />
</SelectTrigger>
<SelectContent dir="rtl" className="bg-black text-white">
  <SelectItem value="singular">مفرد</SelectItem>
  <SelectItem value="plural">جمع</SelectItem>
</SelectContent>
</Select>

<Input
maxLength={1}
dir="rtl"
pattern="[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF]"
className="w-[50px] p-2 text-center"
/>
<Input
maxLength={1}
dir="rtl"
pattern="[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF]"
className="w-[50px] p-2 text-center"
/>
<Input
maxLength={1}
dir="rtl"
pattern="[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF]"
className="w-[50px] p-2 text-center"
/>