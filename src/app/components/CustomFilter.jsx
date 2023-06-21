"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { updateSearchParams } from "@/utils/utils";

export default function CustomFilter({ title, options }) {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]); 

  const handleUpdateParams = (e) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    console.log('newPathName ',newPathName)
    router.push(newPathName);
  };

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); 
          handleUpdateParams(e); 
        }}
      >
        <div className='relative w-fit z-10 inline-block text-left my-2 xs:w-auto'>
          <Listbox.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-[0.575rem] py-[0.625rem] px-3 text-sm font-medium text-[0.671rem] text-primary border-[0.77px]  border-secondary">
            {title && title}
            <svg className="-mr-1 h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </Listbox.Button>
          <Transition
            as={Fragment} 
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
