const HeroImgCard = () => {
  return (
    <div className="hero bg-base-300 rounded-box shadow-md">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="min-w-1/4">
          <img
            src="https://img.freepik.com/free-photo/muslim-students-wearing-masks-hanging-out-new-normal_53876-96180.jpg?w=740&t=st=1694547847~exp=1694548447~hmac=80a05db02965d0fd50ffeac61d2962525508e68a462a64d3ff8644d86748a5b9"
            className="rounded-lg"
          />
        </div>
        <div className="min-w-3/4">
          <h4 className="flex flex-row justify-start items-center gap-3 text-lg font-semibold">
            <span className="w-10 h-0.5 bg-base-content"></span> Find . Meet .
            Enjoy
          </h4>
          <h1 className="text-3xl font-black">
            The Ultimate Community Explorer
          </h1>
          <p className="font-normal text-lg">
            Stay Informed, Connected, and Engaged in Your Community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroImgCard;
