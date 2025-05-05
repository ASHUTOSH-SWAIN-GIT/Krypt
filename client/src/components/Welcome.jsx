import { AiFillPlayCircle } from "react-icons/ai"
import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from "react-icons/bs"

import { Loader } from "./"


const Welcome = () => {
  const ConnectWallet = () => {

  }

  const handleSubmit = () => {

  }

  const Input = ({ placeholder, name, type, value }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleachange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism "
    />

  )

  const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[2px] border-gray-400 text-sm font-bold text-white";



  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send crypto <br /> across the world

          </h1>
          <p className="text-left mt-5 text-white font-lightn md:w-9/12 w-11/12 text-base  ">
            Explore the world of crypto buy and sell cryptocurrencies easily on Krypt
          </p>
          <button
            type="button"
            onClick={ConnectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[2546bd ]"
          >
            <p className="text-white text-base font-semibold"> Connect Wallet</p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              reliability
            </div>
            <div className={companyCommonStyles}>
              Security
            </div>
            <div className={`rounded-tr-2xl ${companyCommonStyles}`}>
              Etherium
            </div>
            <div className={`rounded-bl-2xl ${companyCommonStyles}`}>
              WEB3.0
            </div>
            <div className={companyCommonStyles}>
              Low fees
            </div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full ">
              <div className="flex justify-between items-start ">
                <div className="w-10 h-10 rounded-full border-black border-2 flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#00000" />
                </div>
                <BsInfoCircle fontSize={17} color="#000" />
              </div>
              <div>
                <p className="text-black font-light text-sm">
                  Address
                </p>
                <p className="text-black font-semibold text-lg mt-1">
                  Etherium
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address to" name="Address to " type="text " handleChange={() => { }} />
            <Input placeholder="Amount(ETH)" name="amount " type="text " handleChange={() => { }} />
            <Input placeholder="keyword (GIF)" name="keyword " type="text " handleChange={() => { }} />
            <Input placeholder="Enter message " name="message  " type="text " handleChange={() => { }} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send now
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Welcome
