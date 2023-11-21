import { useState } from 'react'
import { InputBox } from './components';
import useCurrencyInfo from "./hooks/useCurrencyInfo";
// import BackgroundImage from './assets/bgImage.jpg'   


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div
        className=" bg-neutral-900 w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    >
        <div className="w-full">
            <div className="w-full h-96 max-w-lg mx-auto my-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            className='text-xl'
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount) }
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className=" w-24 h-14 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-xl bg-slate-900 text-white text-2xl"
                            onClick={swap}
                        >
                            SWAP
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            className='text-xl'
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            // onCurrencyChange={(currency) => selectCurrency(currency)}
                            selectCurrency={to}
                            amountDisabled
                        />
                    </div>
                    <button type="submit" className="w-full text-xl bg-amber-950 text-white px-4 py-3 rounded-lg">
                        {/* Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`} */}
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
