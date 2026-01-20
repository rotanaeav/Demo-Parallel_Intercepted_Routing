'use client';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { LoginRequest } from "@/lib/type/loginRequest";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";


export default function LoginForm() {
    const router = useRouter();
    const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8,"Password must be at least 8 characters long")
    .regex(/[A-Z]/,"Password must contain at least one uppercase letter")
    .regex(/[a-z]{2,}/,"Password must contain at least two lowercase letter")
    .regex(/[0-9]/,"Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/,"Password must contain at least one special character")
    
})
const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
} = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema)
}
);

const loginSubmit = (data: LoginRequest) => {
    console.log(data);
}


    return (
        <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
  <Button
    variant="link"
    type="button"
    onClick={() => router.push("/register")}
  >
    Sign Up
  </Button>
</CardAction>
      </CardHeader>
      <CardContent>
        {/* handle login form submit */}
        <form onSubmit={handleSubmit(loginSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
              />
              <p className="text-red-600">{errors.email?.message}</p>

            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>

                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" {...register("password")} />
               <p className="text-red-600">{errors.password?.message}</p>
            </div>
          </div>
           <CardFooter className="flex-col gap-4 mt-4">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
        </form>
      </CardContent>
     
    </Card>
    )
}
  