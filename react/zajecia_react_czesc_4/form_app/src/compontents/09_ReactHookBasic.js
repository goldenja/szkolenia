import React from "react";
import { useForm } from "react-hook-form";

export default function ReactHookBasic() {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 3 })} />
      {errors.firstName && "Last name is required"}
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}
