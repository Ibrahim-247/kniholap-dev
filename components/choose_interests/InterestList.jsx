"use client";
import { useState, useEffect } from "react"; // ← Added useEffect
import CommonBtn from "../common/CommonBtn";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useOptions } from "@/hooks/options.hook";
import { Empty, Result } from "antd";
import { useMutation } from "@tanstack/react-query";
import { axiosPrivateClient } from "@/lib/axios.private.client";
import toast from "react-hot-toast";

const InterestList = () => {
  const router = useRouter();
  const { categoryList, categoryListError, categoryListLoading } = useOptions();

  const [selected, setSelected] = useState([]);

  // This is the fix — now correctly fills pre-selected items
  useEffect(() => {
    if (categoryList && categoryList.length > 0) {
      const preSelectedIds = categoryList
        .filter((cat) => cat.is_selected)
        .map((cat) => cat.id);
      setSelected(preSelectedIds);
    }
  }, [categoryList]);

  const axiosInstance = axiosPrivateClient();

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const updateInterest = useMutation({
    mutationKey: ["updateInterests"],
    mutationFn: async () => {
      const response = await axiosInstance.post("user/category/store", {
        category_ids: selected,
      });
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Interests updated successfully!");
      console.log("Success:", data);
      Cookies.remove("firstTime", { path: "/" });
      router.push("/library");
    },
    onError: (error) => {
      toast.error("Failed to update interests");
      console.error("Error:", error);
    },
  });

  const handleDone = () => {
    if (selected.length === 0) {
      toast.error("Please select at least one genre");
      return;
    }
    updateInterest.mutate();
  };

  const handleReset = () => {
    setSelected([]);
    toast("Selection cleared");
  };

  return (
    <div className="w-full flex flex-col justify-start gap-4 sm:gap-6 md:gap-10 items-start">
      {categoryListLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 xs:gap-4 gap-2 lg::gap-8 w-full">
          {Array.from({ length: 15 }).map((_, index) => (
            <div
              key={index}
              className={`w-full cursor-pointer flex flex-col gap-3 duration-500 ease-in-out justify-start overflow-hidden items-center p-2 xs:p-3 bg-bg-gray lg:p-6 rounded sm:rounded-2xl hover:text-white`}
            >

              <div className="w-full h-24 bg-gray-100 xs:h-36 sm:h-40 lg:h-60 rounded sm:rounded-2xl object-cover animate-pulse"></div>
              <div className="w-full h-3 rounded sm:rounded-2xl bg-gray-100 animate-pulse"></div>
            </div>
          ))}
        </div>
      ) : categoryListError ? (
        <div className="w-full py-10 px-3 flex justify-center items-center">
          <Result status="500" title="Server Error" subTitle="Sorry, something went wrong. Please try again later." />
        </div>
      ) : categoryList?.length === 0 ? (
        <div className="w-full py-10 px-3 flex justify-center items-center">
          <Empty description="No Genres Found" />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 xs:gap-4 gap-2 lg::gap-8 w-full">
          {categoryList?.map((category) => {
            const isSelected = selected.includes(category.id);
            return (
              <button
                onClick={() => toggleSelect(category.id)}
                key={category.id}
                className={`w-full cursor-pointer flex flex-col gap-3 duration-500 ease-in-out justify-start overflow-hidden items-center p-2 xs:p-3 lg:p-6 rounded sm:rounded-2xl
                  ${isSelected
                    ? "bg-secondary text-white"
                    : "bg-bg-gray text-foreground"
                  }
                  hover:bg-secondary hover:text-white`}
              >
                <img
                  src={category.image}
                  alt={category.title || "category image"}
                  className="w-full h-24 xs:h-36 sm:h-40 lg:h-60 rounded sm:rounded-2xl object-cover"
                />
                <p className="text-lg font-medium">{category.title}</p>
              </button>
            );
          })}
        </div>
      )}

      <div className="w-full grid grid-cols-2 gap-3 lg:gap-6">
        <CommonBtn
          className="rounded-full"
          type="button"
          onclick={handleDone}
          isLoading={updateInterest.isPending}
          disabled={updateInterest.isPending}
        >
          Done
        </CommonBtn>
        <CommonBtn
          onclick={handleReset}
          type="button"
          disabled={updateInterest.isPending}
          className="rounded-full bg-transparent text-primary border"
        >
          Reset
        </CommonBtn>
      </div>
    </div>
  );
};

export default InterestList;