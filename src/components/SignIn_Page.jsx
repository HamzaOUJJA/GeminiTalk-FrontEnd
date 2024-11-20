import { SignIn } from "@clerk/clerk-react";
import "../index.css";

const SignIn_Page = () => {
    return (
        <div className="SignIn_Page">
            <SignIn path="/sign-in" signUpUrl="/sign-up" forceRedirectUrl="/dashboard" />
        </div>
    );
};

export default SignIn_Page;
