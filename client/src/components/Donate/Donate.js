import React, { useState } from 'react'
import './Donate.css'

function loadScript(src) {

    return new Promise( resolve => {
        const script = document.createElement('script');
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
    
}

const __DEV__ =  document.domain === "localhost"


export default function Donate() {

    const [user, setUser] = useState({
        name:"", gender:"Mr", email:"", phone:"", amount:"", currency:"INR", address:"", postal:"", city:"", state:"", country:"India"
    });

    let detail,value;
    const handleInput = (Event) => {
        detail = Event.target.name;
        value = Event.target.value;
        if(detail == "amount") {
            value = value.slice(1)
        }
        setUser({...user, [detail] : value});
    }

    const {name, gender, email, phone, amount, currency, address, country} = user


    async function displayRazorPay() {

        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if(!res) {
            alert('Razorpay SDK failed to load')
            return
        }

        const fetch_response = await fetch('/orders', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                amount,currency
            })
        })
        const data = await fetch_response.json();

        console.log(data);

        const options = {
            "key": __DEV__ ? 'rzp_test_ugHXcsia9p3Yto' : 'PRODUCTION_KEY',
            "name": name,
            "amount": data.amount.toString(),
            "description": "Thankyou for donating",
            // "image": "https://example.com/your_logo", //logo of sankalp
            "order_id": data.order_id,
        
            "handler": function (response){
                console.log(response)
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);

            },
            "prefill": {
                "name": name,
                "email": email,
                "contact": phone
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        
        const paymentObject = new window.Razorpay(options);
        console.log(paymentObject); 

        paymentObject.on('payment.failed', function (response){
            console.log(response);
            alert("This step of payment Failed");
            // alert(response.error.code);
            // alert(response.error.description);
            // alert(response.error.source);
            // alert(response.error.step);
            // alert(response.error.reason);
            // alert(response.error.metadata.order_id);
            // alert(response.error.metadata.payment_id);
        });
    
        paymentObject.open()

    }

    function displayCustomAmountBtn() {
        let element = document.getElementById("custom-amount")
        console.log(element)
        element.style.display = "initial"
    }


    return(
        <div className='page'>
            <div className="donate-container">
                <div className="half-container">
                    <div className="input-box">
                        <div className="gender">
                            <select name="gender" id="" placeholder='' onChange={handleInput}>
                                <option value="Mr">Mr</option>
                                <option value="Miss">Miss</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Ms">Ms</option>
                            </select>
                        </div>
                        <input type="text" placeholder='Name' name="name" id=""  onChange={handleInput} />
                    </div>

                    <div className="input-box">
                        <input type="email" placeholder='Email' name="email" id=""  onChange={handleInput} />
                    </div>
                    
                    <div className="input-box">
                        <input type="tel" placeholder='Phone number' name="phone" id=""  onChange={handleInput} />
                    </div>

                    <div className="input-box">
                        <input type="text" placeholder='Address' name="address" id=""  onChange={handleInput} />
                    </div>
                </div>

                <div className="half-container">
                    <div className="input-box">
                        <input type="text" placeholder='Postal Code' name="postal" id=""  onChange={handleInput} />
                    </div>

                    <div className="input-box">
                        <input type="text" placeholder='City' name="city" id=""  onChange={handleInput} />
                    </div>

                    <div className="input-box">
                        <input type="text" placeholder='State' name="state" id=""  onChange={handleInput} />
                    </div>

                    <div className="input-box">
                        <select name="country" id="" placeholder='India' onChange={handleInput}>
                            <option value="1">India</option>
                        </select>
                    </div>
                </div>
                <div className="amount-container">
                    <input type="button" name="amount" value="₹100" onClick={handleInput} />
                    <input type="button" name="amount" value="₹500" onClick={handleInput} />
                    <input type="button" name="amount" value="₹1000" onClick={handleInput} />
                    <div className="custom-amount">
                        <input type="button" value="Other Amount" onClick={displayCustomAmountBtn} />
                        <input type="text" name="amount" id="custom-amount" onChange={handleInput} />
                    </div>
                </div>
                <div className="submit-details">
                    <button onClick={displayRazorPay}>DONATE</button>
                </div>
            </div>
            
        </div>
    )

}

/*
<div className="container vh-100 mt-5">
                <h1>Donate to Helps those who are in need.</h1>
                <a onClick={displayRazorPay} style={{cursor:"pointer"}}>Donate though razorpay</a>
            </div>
*/

// key_id = rzp_test_ugHXcsia9p3Yto
// key_secret = SCQGxZWeGQnwyKbTlf9dohsH