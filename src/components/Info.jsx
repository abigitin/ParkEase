import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

function Info() {
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_st148ib",
        "template_xiq9t09",
        e.target,
        "QZF3922cHVYiU_QnD"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/scs");
  };
  return (
    <>
      <form className="bg-black h-screen" onSubmit={sendEmail}>
        <header className="text-yellow-300 font-bold text-3xl justify-center flex pt-6 tracking-wide">
          <p className="bg-yellow-400 font-sans text-black mx-2 rounded-sm text-2xl">
            P
          </p>
          PARK <span className="text-white mx-2"> EASE</span>
        </header>
        <div className="my-20">
          <h1 className="text-center text-yellow-300 py-3 text-2xl font-bold font-mono">
            INFO
          </h1>
          <div className="space-y-5 my-5">
            <div className="flex justify-center">
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-4/5"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex justify-center">
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-4/5"
                name="user_email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex justify-center">
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-4/5"
                name="car"
                type="text"
                placeholder="Enter your car no."
              />
            </div>
            <input
              className="invisible"
              name="price"
              type="number"
              value="50"
            />
            <div className="flex justify-center">
              <input
                type="submit"
                className="bg-yellow-300 rounded-md mb-0 w-2/5 py-2 text-lg"
                value="send"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Info;
