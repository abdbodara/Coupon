import React from "react";
import GoogleLogin from "@leecheuk/react-google-login";
import { useLoginWithAuthMutation } from "../../../app/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/authSlice";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";

const Google = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [updateAuthPost, { error, isSuccess }] = useLoginWithAuthMutation();
  const responseGoogle = (response) => {
    if (response.tokenId) {
      updateAuthPost({
        clientId: response?.googleId,
        fullName: response?.profileObj?.name,
        email: response?.profileObj?.email,
        image: response?.profileObj?.imageUrl,
      })
        .unwrap()
        .then((res) => {
          if (res.success) {
            const userData = {
              clientId: response?.googleId,
              fullName: response?.profileObj?.name,
              email: response?.profileObj?.email,
              image: response?.profileObj?.imageUrl,
              token: res.token,
            };
            localStorage.setItem("user", JSON.stringify(userData));
            router.push("/");
            dispatch(setUser(res));
            window.location.reload("/");
          }
        })
        .catch((err) => {
          console.log("error------------->", err);
        });
    }
  };

  return (
    <div className="p-[10px_24px] border-[1px] border-[#101726] w-full text-center relative rounded-[3px] mt-[25px]">
      <GoogleLogin
        clientId="1072416019688-7pc4f0ml5lbq04dn8stagrv9tbto92en.apps.googleusercontent.com"
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <FcGoogle className="absolute left-[24px] text-[20px]" />
            Continue with Google
          </button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
export default Google;
