import { useForm } from "@formspree/react";

import Button from "src/components/button";
import Input from "src/components/input";

export default function Form() {
  const [state, handleSubmit] = useForm("meqbnykr");

  return (
    <section id="form" className="bg-dark-red">
      <div className="w-5/6 container mx-auto py-10 flex items-center md:gap-x-10 gap-x-0 justify-between">
        <div className="flex flex-col gap-y-10 md:w-1/2 w-full ">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold ">
            Working With Us
          </h3>
          <form
            className="flex flex-col gap-y-3 w-full"
            onSubmit={handleSubmit}
          >
            <Input required={true} placeholder="Email" name="Email" />
            <Input
              required={true}
              placeholder="Company Name"
              name="Company Name"
            />
            <Input
              required={true}
              placeholder="Contact Number"
              name="Contact Number"
            />
            <Input
              required={true}
              placeholder="Description"
              name="Description"
              as="textarea"
              rows="5"
            />
            <Button
              disabled={state.submitting}
              as="button"
              additionalStyle="bg-white  !text-dark-red  border border-white hover:bg-dark-red hover:!text-white"
            >
              Send
            </Button>
          </form>
        </div>

        <div className="bg-white w-auto h-[400px] rounded p-10 self-end hidden md:block">
          <img src="/images/logo.png" className="h-full w-auto" />
        </div>
      </div>
    </section>
  );
}
