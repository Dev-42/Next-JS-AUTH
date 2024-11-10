// SignIn Component
import AuthSignIn from "./AuthSignIn";

const SignIn = () => {
  return <AuthSignIn />;
};

export default SignIn;

export async function generateMetadata() {
  return {
    title: "Auth Home Page - Dynamic Title",
    description: "Securely connect with dynamic metadata",
    openGraph: {
      title: "Auth Home Page - Secure Connection",
      description: "Log in securely with our dynamic authentication system.",
      url: "https://yourwebsite.com/signin", // Update with the actual URL
      siteName: "Your Site Name",
      images: [
        {
          url: "https://e7.pngegg.com/pngimages/549/715/png-clipart-web-development-logo-website-web-design-symmetry.png", // Update with the actual image URL
          width: 800,
          height: 600,
          alt: "Login page preview image",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}
