import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useCreateUserForm from "@/hooks/useCreateUserForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import JammelOGO from "@/assets/Icon 1.svg";
import { Loader2, RotateCw } from "lucide-react";
import { schema } from "../types/schema";
import { Textarea } from "@/components/ui/textarea";

type FormData = z.infer<typeof schema>;

const generateCaptcha = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: 6 }, () => characters[Math.floor(Math.random() * characters.length)]).join("");
};

const CreateUserForm: React.FC = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { onSubmit, loading } = useCreateUserForm();

  const handleCaptchaValidation = (data: FormData) => {
    if (captcha !== captchaInput) {
      setCaptchaError("Invalid CAPTCHA. Please try again.");
      setCaptcha(generateCaptcha()); // Generate a new CAPTCHA on error
    } else {
      setCaptchaError("");
      onSubmit(data); // Submit the form if CAPTCHA is correct
    }
  };

  return (
    <div className="overflow-hidden w-full h-full mt-14">
      <Card className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="contact__logo w-full flex justify-start items-center">
          <img
            src={JammelOGO}
            alt="Jamme"
            className="w-16 h-auto object-cover aspect-square"
          />
        </div>
        <h1 className="text-2xl font-semibold mb-4">Jamme Support</h1>
        <form onSubmit={handleSubmit(handleCaptchaValidation)} className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-2 w-64">
              <Label
                htmlFor="userType"
                className="text-lg font-semibold text-gray-300 flex-shrink-0"
              >
                I am
              </Label>
              <Controller
                name="userType"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    onValueChange={field.onChange}
                    value={field.value}
                    required
                  >
                    <SelectTrigger className="bg-transparent border border-gray-200 text-lg font-semibold text-yellow-400">
                      <SelectValue placeholder="Select User Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a jamme user">a jamme user</SelectItem>
                      <SelectItem value="an influencer">an influencer</SelectItem>
                      <SelectItem value="a brand/business">a brand/business</SelectItem>
                      <SelectItem value="an agency">an agency</SelectItem>
                      <SelectItem value="other">other</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.userType && <p className="text-red-500 text-sm">{errors.userType.message}</p>}
            </div>

            <div className="flex items-center gap-2 w-96">
              <Label
                htmlFor="supportType"
                className="text-lg font-semibold text-gray-300 flex-shrink-0"
              >
                looking to
              </Label>
              <Controller
                name="supportType"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    onValueChange={field.onChange}
                    value={field.value}
                    required
                  >
                    <SelectTrigger className="bg-transparent border border-gray-200 text-lg font-semibold text-sky-500">
                      <SelectValue placeholder="Select Support Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="get support">get support</SelectItem>
                      <SelectItem value="report an issue">report an issue</SelectItem>
                      <SelectItem value="collab">collab</SelectItem>
                      <SelectItem value="drive revenue">drive revenue</SelectItem>
                      <SelectItem value="drive traffic">drive traffic</SelectItem>
                      <SelectItem value="promote my brand/business">promote my brand/business</SelectItem>
                      <SelectItem value="post audio">post audio</SelectItem>
                      <SelectItem value="others">other options</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.supportType && <p className="text-red-500 text-sm">{errors.supportType.message}</p>}
            </div>
          </div>

          <Input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Name"
            className="w-full p-2 bg-transparent border-b border-gray-300 outline-none text-sm focus:border-white"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <Input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Email"
            className="w-full p-2 bg-transparent border-b border-gray-300 outline-none  text-sm focus:border-white"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <Input
            type="text"
            id="companyName"
            {...register("companyName")}
            placeholder="Company Name"
            className="w-full p-2 bg-transparent border-b border-gray-300 outline-none text-sm focus:border-white"
          />
          {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName.message}</p>}
          <Textarea
            id="reason"
            {...register("reason")}
            placeholder="Reason"
            className="w-full p-2 bg-transparent border-b border-gray-300 outline-none text-sm focus:border-white"
          ></Textarea>
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason.message}</p>}

          <div className="flex items-center gap-2 w-full">
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  onValueChange={field.onChange}
                  value={field.value}
                  required
                >
                  <SelectTrigger className="bg-transparent border border-gray-200">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="India">India</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
          </div>

          {/* CAPTCHA Section */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 mb-2">
              <span className="px-4 py-1 bg-yellow-400 text-gray-800 font-mono rounded-md">
                {captcha}
              </span>
              <span
                onClick={() => setCaptcha(generateCaptcha())}
              >
                <RotateCw />
              </span>
            </div>
            <Input
              type="text"
              id="captchaInput"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Enter CAPTCHA"

            />
            {captchaError && <p className="text-red-500 text-sm">{captchaError}</p>}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="py-5 px-3 w-full mt-4 bg-blue-500 text-white hover:bg-blue-600"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin text-white" /> : "Submit"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateUserForm;
