import { SignInFormComponent } from "@/components/sign-in";

export default function SignInForm() {
  return (
<<<<<<< HEAD
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">FAST-SOCIALS</h1>
            <p className="text-balance text-muted-foreground">
              Login an account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="XYZ@gmail.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <div style={{ display: "flex" }}>
                <Input id="password" type="password" required />
              </div>
              <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm "
              >
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="text-center text-sm mt-20">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
=======
    <SignInFormComponent />
    // <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
    //   <div className="flex items-center justify-center py-12">
    //     <div className="mx-auto grid w-[350px] gap-6">
    //       <div className="grid gap-2 text-center">
    //         <h1 className="text-3xl font-bold">Login</h1>
    //         <p className="text-balance text-muted-foreground">
    //           Enter your email below to login to your account
    //         </p>
    //       </div>
    //       <div className="grid gap-4">
    //         <div className="grid gap-2">
    //           <Label htmlFor="email">Email</Label>
    //           <Input
    //             id="email"
    //             type="email"
    //             placeholder="lXX-XXXX@lhr.nu.edu.pk"
    //             required
    //           />
    //         </div>
    //         <div className="grid gap-2">
    //           <div className="flex items-center">
    //             <Label htmlFor="password">Password</Label>
    //             <Link
    //               href="/forgot-password"
    //               className="ml-auto inline-block text-sm underline"
    //             >
    //               Forgot your password?
    //             </Link>
    //           </div>
    //           <Input id="password" type="password" required />
    //         </div>
    //         <Button type="submit" className="w-full">
    //           Login
    //         </Button>
    //       </div>
    //       <div className="mt-4 text-center text-sm">
    //         Don&apos;t have an account?{" "}
    //         <Link href="/sign-up" className="underline">
    //           Sign up
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="hidden bg-muted lg:block">
    //     <Image
    //       src="/placeholder.svg"
    //       alt="Image"
    //       width="1920"
    //       height="1080"
    //       className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
    //     />
    //   </div>
    // </div>
>>>>>>> 3e0a74f23ba1dd5b36ef6f449e8da5ffb2e3efdf
  );
}
