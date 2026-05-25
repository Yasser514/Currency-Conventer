/*const { useState, useMemo } = React;

export function CurrencyConverter() {
   let rates={
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
 }
 let [amount,setAmount]=useState("");
 let [frOm,setForm]=useState("USD");
 let [to,setTo]=useState("EUR");
 let currencyForUsd=useMemo(()=>{
   if(!amount) return 0;
   return amount/rates[frOm]
 },[amount,frOm])
 let converted=currencyForUsd*rates[to]

 return (
   <>
   <input type="number" value={amount} onChange={x=>setAmount(Number(x.target.value))}/>
   <select onChange={x=>setForm(x.target.value)}>
   <option>USD</option>
   <option>EUR</option>
   <option>GBP</option>
   <option>JPY</option>
   </select>
   <select onChange={x=>setTo(x.target.value)}>
   <option>USD</option>
   <option>EUR</option>
   <option>GBP</option>
   <option>JPY</option>
   </select>
   <p>{converted.toFixed(2)} {to}</p>
   </>
 )
 
 
}*/
const { useState, useMemo } = React;

export function CurrencyConverter() {
   let rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
   }
   let [amount, setAmount] = useState("");
   let [frOm, setForm] = useState("USD");
   let [to, setTo] = useState("EUR");
   
   let currencyForUsd = useMemo(() => {
     if (!amount) return 0;
     return amount / rates[frOm]
   }, [amount, frOm])
   
   let converted = currencyForUsd * rates[to]

   return (
     <>
       <input 
         type="number" 
         value={amount} 
         onChange={x => setAmount(Number(x.target.value))}
         placeholder="Enter amount"
       />
       <select value={frOm} onChange={x => setForm(x.target.value)}>
         <option value="USD">USD</option>
         <option value="EUR">EUR</option>
         <option value="GBP">GBP</option>
         <option value="JPY">JPY</option>
       </select>
       <select value={to} onChange={x => setTo(x.target.value)}>
         <option value="USD">USD</option>
         <option value="EUR">EUR</option>
         <option value="GBP">GBP</option>
         <option value="JPY">JPY</option>
       </select>
       <p>{converted.toFixed(2)} {to}</p>
     </>
   )
}