/** @format */

import { useForm } from "react-hook-form";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useRegisterMutation } from "../redux/slices/api/authApiSlice";
import { setCredentials } from "../redux/slices/authSlice";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { BiCheck, BiCheckbox, BiChevronDown } from "react-icons/bi";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import Textbox from "../Compnonents/Textbox";
import Loading from "../Compnonents/Loading";
import Button from "../Compnonents/Button";

// const options = [
//   { id: 1, name: "User", value: false },
//   { id: 2, name: "Admin", value: true },
// ];

const Signup = () => {
  // const [selectedOption, setSelectedOption] = useState(options[0]);
  // const { user } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signup, { isLoading }] = useRegisterMutation();

  const handleRegister = async (data) => {
    try {
      const res = await signup(data).unwrap();
      dispatch(setCredentials(res));
      toast.success(res.message || "Registered successfully, please login");
      navigate("/login");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  // useEffect(() => {
  //   console.log(selectedOption);
  // }, [selectedOption]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6] dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#302943] via-slate-900 to-black">
      <div className="w-full md:w-auto max-md:py-10 flex gap-0 md:gap-40 flex-col min-[1100px]:flex-row px-3  items-center justify-center">
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full min-[1100px]:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 min-[1100px]:gap-y-10 2xl:-mt-20">
            {/* <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base dark:border-gray-700 dark:text-blue-400 border-gray-300 text-gray-600">
              Manage all your task in one place!
            </span> */}
            <p className="flex flex-col gap-0 md:gap-4 text-4xl min-[1100px]:text-6xl 2xl:text-7xl font-black text-center dark:text-gray-400 text-blue-700">
              <span>Manage all your task in one place!</span>
              <span>Tasklytic</span>
            </p>

            <div className="cell">
              <div className="circle rotate-in-up-left"></div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/23 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="form-container w-full md:w-[600px] flex flex-col gap-y-8 bg-white dark:bg-slate-900 px-6 pt-10 pb-10 max-h-[80vh]"
          >
            <div>
              <p className="text-blue-600 text-3xl font-bold text-center">
                Hello there!
              </p>
              <p className="text-center text-base text-gray-700 dark:text-gray-500">
                Please coutinue signing up!
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex gap-x-2 max-[500px]:flex-col max-[500px]:gap-y-5">
                <Textbox
                  placeholder="John Doe"
                  type="text"
                  name="name"
                  label="Name"
                  className="w-full rounded-full"
                  register={register("name", {
                    required: "Name is required!",
                  })}
                  error={errors.name ? errors.name.message : ""}
                />
                <Textbox
                  placeholder="you@example.com"
                  type="email"
                  name="email"
                  label="Email Address"
                  className="w-full rounded-full"
                  register={register("email", {
                    required: "Email Address is required!",
                  })}
                  error={errors.email ? errors.email.message : ""}
                />
              </div>

              <div className="flex gap-x-2 max-[500px]:flex-col max-[500px]:gap-y-5">
                <Textbox
                  placeholder="password"
                  type="password"
                  name="password"
                  label="Password"
                  className="w-full rounded-full"
                  register={register("password", {
                    required: "Password is required!",
                  })}
                  error={errors.password ? errors.password?.message : ""}
                />

                <Textbox
                  placeholder="e.g. CEO"
                  type="text"
                  name="role"
                  label="Occupation"
                  className="w-full rounded-full"
                  register={register("role", {
                    required: "Role is required",
                  })}
                  error={errors.role ? errors.role?.message : ""}
                />
              </div>
              <div className="flex gap-x-2 max-[500px]:flex-col max-[500px]:gap-y-5">
                <Textbox
                  placeholder="e.g. CEO"
                  type="text"
                  name="title"
                  label="Title"
                  className="w-full rounded-full"
                  register={register("title", {
                    required: "title is required!",
                  })}
                  error={errors.title ? errors.title?.message : ""}
                />

                <div className="mx-auto w-full text-gray-900">
                  Role
                  <select
                    {...register("isAdmin")}
                    className={clsx(
                      "relative flex items-center justify-between w-full rounded-full bg-transparent mt-1 px-3 py-2.5 2xl:py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white outline-none text-base focus:ring-2 ring-blue-300 data-selected:rounded-ee-none",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                    )}
                    style={{ appearance: "none" }}
                  >
                    <option disabled selected hidden>
                      Select an option
                    </option>
                    <option value={false} style={{ marginTop: 10 }}>
                      User
                    </option>
                    <option value={true}>Admin</option>
                  </select>
                </div>
                {/* <Listbox value={selectedOption} onChange={setSelectedOption}>
                  <ListboxButton
                    className={clsx(
                      "relative flex items-center justify-between w-full rounded-full bg-transparent mt-1 px-3 py-2.5 2xl:py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white outline-none text-base focus:ring-2 ring-blue-300 data-selected:rounded-ee-none",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                    )}
                  >
                    {selectedOption.name}
                    <BiChevronDown
                      className="group pointer-events-none fill-black/60"
                      aria-hidden="true"
                    />
                  </ListboxButton>
                  <ListboxOptions
                    anchor="bottom"
                    transition
                    className={clsx(
                      "w-[var(--button-width)] mt-2 rounded-xl border border-black/20 bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
                      "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
                    )}
                  >
                    {options.map((option) => (
                      <ListboxOption
                        key={option.name}
                        value={option}
                        className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                      >
                        <FaCheck className="invisible size-4 fill-gray-500  group-data-[selected]:visible" />
                        <div
                          className="text-sm/6 text-black cursor-pointer  w-full"
                          {...register("role")}
                        >
                          {option.name}
                        </div>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox> */}
              </div>
            </div>
            {isLoading ? (
              <Loading />
            ) : (
              <Button
                type="submit"
                label="Register"
                className="w-full min-[500px]:w-2/3 h-10 bg-blue-700 text-white rounded-full self-center "
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
