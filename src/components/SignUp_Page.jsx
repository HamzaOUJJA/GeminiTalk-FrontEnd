import { SignUp } from "@clerk/clerk-react";
import "../index.css";

const SignUp_Page = () => {
  return (
    <div className="SignUp_Page">
      <SignUp path="/sign-up" signInUrl="sign-in"/>
    </div>
  ); 
}; 


export default SignUp_Page;
