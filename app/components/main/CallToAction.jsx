import React from "react";

const CallToAction = () => {
  return (
    <div className="hero bg-base-100 rounded-box shadow-md">
      <div className="hero-content flex-col lg:flex-row items-start justify-start">
        <div className="text-center lg:text-left my-20">
          <h1 className="text-3xl font-bold text-primary">
            Connect the global Muslim community
          </h1>
          <p className="py-6">
            Building a strong and supportive Halal network, together. Join Halal
            Network today and discover a world of resources and opportunities.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-3">
              <a href="#" className="font-medium text-center mb-3">
                Don&apos;t have an account yet?
              </a>
              <button className="btn btn-outline btn-primary">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
