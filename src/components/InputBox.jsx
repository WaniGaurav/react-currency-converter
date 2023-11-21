import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
   
    const amountInputId = useId()

    return (
        <div className={`bg-white h-32 p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="mb-2 inline-block text-amber-800">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full h-14 bg-transparent py-1.5 text-2xl"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisabled}
                    value={amount}
                    // placeholder={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="mb-2 w-full text-violet-700">Currency Type</p>
                <select
                    name='currency list'
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisabled}
                >
                    
                        { currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
