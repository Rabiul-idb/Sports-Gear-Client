

const Contact = () => {
    return (
        <div className="w-11/12 mx-auto flex lg:flex-row flex-col gap-5 items-center justify-center mt-3">
            <div className="w-1/2">
                <h2 className="font-semibold text-2xl mb-7">Contact Us</h2>
                <p>
                    Need to get in touch with us? Enter fill out the form with your query or find the email you'd like to contact bellow.
                </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name="textarea" rows={5} placeholder="Enter your message" className="input input-bordered" required></textarea>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Contact;