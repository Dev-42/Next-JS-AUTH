// SignUp Component
import AuthSignUp from "./AuthSignUp";

const SignUp = () => {
  return <AuthSignUp />;
};

export default SignUp;

export async function generateMetadata() {
  return {
    title: "SignUp Page",
    description: "Create your account securely",
    openGraph: {
      title: "SignUp Page",
      description: "Join us by creating an account securely.",
      url: "https://yourwebsite.com/sign-up",
      images: [
        {
          url: "https://e7.pngegg.com/pngimages/549/715/png-clipart-web-development-logo-website-web-design-symmetry.png",
          width: 1200,
          height: 630,
          alt: "Signup page image",
        },
      ],
    },
  };
}
