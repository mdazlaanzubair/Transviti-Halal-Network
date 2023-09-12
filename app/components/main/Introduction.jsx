import introImage from "@/public/assets/introduction.jpg";

const Introduction = () => {
  return (
    <div className="hero bg-base-100 rounded-box shadow-md">
      <div className="hero-content flex-col">
        <div className="w-full">
          <h4 className="flex flex-row justify-start items-center gap-3 text-lg font-semibold text-primary">
            <span className="w-10 h-0.5 bg-base-content"></span> Welcome to
            Halal network
          </h4>
          <h1 className="text-3xl font-black mb-5">
            Your ultimate destination for all halal things!
          </h1>
          <p className="font-light text-lg">
            Whether you&apos;re searching for the nearest mosque or looking for
            a delicious halal restaurant to try out, we&apos;ve got you covered.
            With our exciting features, you can follow and connect with
            like-minded individuals, and chat with them. Join our vibrant and
            inclusive community by attending our events.
          </p>
        </div>
        <div className="min-w-1/4">
          <img
            src={introImage.src}
            // src="https://img.freepik.com/free-photo/muslim-students-wearing-masks-hanging-out-new-normal_53876-96180.jpg?w=740&t=st=1694547847~exp=1694548447~hmac=80a05db02965d0fd50ffeac61d2962525508e68a462a64d3ff8644d86748a5b9"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
