export default function SetProfile() {
  return (
    <div>
      <p
        className="m-6 px-12 text-2xl font-semibold text-[#464255] border-b pb-4 flex justify-between items-center
"
      >
        Profile
        <img src="/dropdown.svg" alt="" />
      </p>
      <form action="" className="m-auto relative left-[200px]">
        <img
          src="/changePhoto.svg"
          alt=""
          className="relative left-[140px] mb-8"
        />
        <label htmlFor="" className="text-[#004663] text-base font-medium">
          Enter Full Name
        </label>
        <br />
        <input
          type="text"
          className="border w-1/2 p-4 pl-6 rounded-sm placeholder:text-sm placeholder:text-[#444444] placeholder:font-normal mt-2 mb-6"
          placeholder="Enter Full Name"
        />{' '}
        <br />
        <label htmlFor="" className="text-[#004663] mb-2 text-base font-medium">
          Enter Email Address
        </label>{' '}
        <br />
        <input
          type="text"
          className="border w-1/2 p-4 pl-6 rounded-sm placeholder:text-sm placeholder:text-[#444444] placeholder:font-normal mt-2 mb-6"
          placeholder="Enter email address"
        />{' '}
        <br />
        <label htmlFor="" className="text-[#004663] mb-2 text-base font-medium">
          Enter Phone Number
        </label>{' '}
        <br />
        <input
          type="text"
          className="border w-1/2 p-4 pl-6 rounded-sm placeholder:text-sm placeholder:text-[#444444] placeholder:font-normal mt-2 mb-6"
          placeholder="Enter Phone Number"
        />
      </form>
      <p
        className="text-[#444444] m-0 relative left-[200px]
"
      >
        I have read the
        <span className="text-[#E66500] text-sm underline font-medium">
          <a href="#">Terms and Conditions</a>
        </span>
      </p>
      <button className="m-auto border py-4 px-8 w-1/2 mt-[100px] bg-[#E66500] font-bold text-white rounded-md text-base tracking-wider relative left-[200px]">
        UPDATE
      </button>
      <p
        className="m-6 px-12 text-2xl font-semibold text-[#464255] border-t pt-4 flex justify-between items-center
"
      >
        Password
        <img src="/dropdown.svg" alt="" />
      </p>
    </div>
  );
}
