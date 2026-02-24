import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm();


  const onSubmit = async (data) => {
    };

  
 
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-3">
        {/* REGISTER CARD */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg px-6 py-6">
          {/* BACK TO HOME */}
          <div className="text-sm text-gray-600 mb-3">
            <Link to="/#home" className="hover:underline">
              ← Back to home
            </Link>
          </div>

          {/* HEADER */}
          <div className="text-center mb-5">
            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-indigo-500 flex items-center justify-center">
              <span className="text-white text-lg">🎓</span>
            </div>

            <h1 className="text-xl font-bold text-gray-900">
              Create your account
            </h1>
            <p className="text-gray-600 text-sm">
              Start your preparation journey today
            </p>
          </div>

          {/* FORM */}
          <form
            className="space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* INPUT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* FULL NAME */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  {...register("firstName", {
                    required: "This field is required",
                    maxLength: {
                      value: 25,
                      message: "Maximum 25 characters allowed",
                    },
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters required",
                    },
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                {errors.fullName && (
                  <p className="text-red-400">{errors.fullName?.message}</p>
                )}
              </div>

              {/* USERNAME */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  {...register("lastName", {
                    required: "This field is required",
                    maxLength: {
                      value: 25,
                      message: "Maximum 20 characters allowed",
                    },
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters required",
                    },
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                {errors.lastName && (
                  <p className="text-red-400">{errors.lastName?.message}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                {errors.email && (
                  <p className="text-red-400">{errors.email?.message}</p>
                )}
              </div>

              {/* MOBILE NUMBER */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  {...register("mobileNumber", {
                    required: "This field is required",
                    pattern:{
                      value:/^(?:\+91[-\s]?)?[6-9]\d{9}$/,
                      message:"please enter a valid mobile number "

                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                {errors.mobileNumber && (
                  <p className="text-red-400">{errors.mobileNumber?.message}</p>
                )}
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Create password"
                  {...register("password", {
                    required: "This field is required",
                    maxLength: {
                      value: 20,
                      message: "this much length is enough",
                    },
                    minLength: {
                      value: 5,
                      message: "password should be more strong ",
                    },
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                {errors.password && (
                  <p className="text-red-400">{errors.password?.message}</p>
                )}
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  {...register("confirmPassword", {
                    required: "This field is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* EXAM SELECTION */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Your Exam
              </label>
              <input
                type="hidden"
                {...register("exam", {
                  required: "Please select an exam",
                })}
              />

              {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["JEE", "NEET", "SSC", "BANK"].map((exam) => {
                  const isActive = selectedExam === exam;
                  return (
                    <button
                      key={exam}
                      type="button"
                      onClick={() =>
                        setValue("exam", exam, { shouldValidate: true })
                      }
                      className={`border rounded-xl p-3 text-left transition
                   ${
                     isActive
                       ? "border-indigo-500 bg-indigo-50"
                       : "hover:border-indigo-500"
                   }
                   `}
                    >
                      <p className="font-semibold text-gray-900">{exam}</p>
                    </button>
                  );
                })}
              </div>
              {errors.exam && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.exam.message}
                </p>
              )} */}
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
            >
              Create Account
            </button>
          </form>

          {/* LOGIN REDIRECT */}
          <div className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


  


export default Register;