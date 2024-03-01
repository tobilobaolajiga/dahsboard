export default function TransactionModal({ modal, closeModal }) {
  return (
    <div>
      {modal && (
        <div
          className="fixed top-0 left-0 w-screen overflow-y-scroll h-full grid grid-cols-3 bg-[#000000] bg-opacity-25 cursor-pointer"
          onClick={closeModal}
        >
          <div></div>
          <div></div>
          <div className="font-poppins bg-white p-8">
            <img
              src="/x2.svg"
              alt=""
              className="relative left-[360px] cursor-pointer mb-4"
              width={16}
              height={16}
              onClick={closeModal}
            />
            <h3
              className="text-3xl font-semibold text-[#464255]
"
            >
              Export Report
            </h3>
            <p className="text-base font-normal text-[#464255] mb-10 mt-2 mr-10">
              Take your work with you. Export hassle-free within the app.
            </p>

            <form className="mr-2">
              <label
                htmlFor=""
                className="text-[#004663] text-base font-medium"
              >
                Select Transaction Type
              </label>
              <br />
              <input
                type="text"
                className="border w-full p-4 pl-6 rounded-sm placeholder:text-sm placeholder:text-[#444444] placeholder:font-normal mt-2 mb-6"
                placeholder="Select type"
              />
              <img
                src="/dropdown.svg"
                alt=""
                className="relative bottom-[50px] left-[330px]"
              />
              <br />
              <label
                htmlFor=""
                className="text-[#004663] mb-2 text-base font-medium"
              >
                Select Institution
              </label>
              <br />
              <input
                type="text"
                className="border w-full p-4 pl-6 rounded-sm placeholder:text-sm placeholder:text-[#444444] placeholder:font-normal mt-2 mb-6"
                placeholder="Select Institution for export"
              />
              <img
                src="/dropdown.svg"
                alt=""
                className="relative bottom-[50px] left-[330px]"
              />
              <br />
              <label
                htmlFor=""
                className="text-[#004663] mb-2 text-base font-medium"
              >
                Select Transaction Status
              </label>
              <br />
              <input
                type="text"
                className="border w-full p-4 pl-6 rounded-sm placeholder:text-sm placeholder:text-[#444444] placeholder:font-normal mt-2 mb-6 placeholder:list-disc"
                placeholder="Approved"
              />
              <img
                src="/dropdown.svg"
                alt=""
                className="relative bottom-[50px] left-[330px]"
              />
              <label
                htmlFor=""
                className="text-[#004663] mb-2 text-base font-medium"
              >
                Period of Transaction
              </label>
              <br />
              <input
                type="text"
                className="border w-full p-4 pl-6 rounded-sm placeholder:text-sm placeholder:text-[#444444] placeholder:font-normal mt-2 mb-6"
                placeholder="February 01, 2023 - May 30,2023"
              />
              <img
                src="/insert_invitation.svg"
                alt=""
                className="relative bottom-[60px] left-[330px]"
              />
              <br />
              <label
                htmlFor=""
                className="text-[#004663] mb-2 text-base font-medium"
              >
                Email Address
              </label>
              <br />
              <input
                type="text"
                className="border w-full p-4 pl-6 rounded-sm placeholder:text-sm placeholder:text-[#444444] placeholder:font-normal mt-2 mb-6"
                placeholder="Enter email address"
              />{' '}
              <br />
            </form>
            <p
              className="text-[#444444] m-0
"
            >
              I have read the{' '}
              <span className="text-[#E66500] text-sm underline font-medium">
                <a href="#">Terms and Conditions</a>
              </span>
            </p>
            <button className="m-auto border py-4 px-8 w-full mt-[100px] bg-[#E66500] font-bold text-white rounded-md text-base tracking-wider">
              EXPORT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
