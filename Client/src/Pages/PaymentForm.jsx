import React , { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
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

const __DEV__ = document.domain === 'localhost'


export default function PaymentForm({funcLast}) {
  const [name, setName] = useState('Mehul')
  async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:5000/razorpay', { method: 'POST' }).then((t) =>
			t.json()
			
		)
		
		console.log(data)

		const options = {
			key: 'rzp_test_8sYueDGWseWPkq',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			// image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
				// alert(response.razorpay_payment_id)
				// alert(response.razorpay_order_id)
				// alert(response.razorpay_signature)
				funcLast();
			},
			prefill: {
				name: 'Rajeswari',
				email: 'rajilechrame@gmail.com',
				phone_number: '9008477628'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
		
	}
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <div><button
					className="App-link"
					onClick={displayRazorpay}
					target="_blank"
					rel="noopener noreferrer"
				>
					RAZOR PAY  
				</button>Rupees 499/-</div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
//  <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//         Payment method
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id="cardNumber"
//             label="Card number"
//             fullWidth
//             autoComplete="cc-number"
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id="cvv"
//             label="CVV"
//             helperText="Last three digits on signature strip"
//             fullWidth
//             autoComplete="cc-csc"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControlLabel
//             control={<Checkbox color="secondary" name="saveCard" value="yes" />}
//             label="Remember credit card details for next time"
//           />
//         </Grid>
//       </Grid>
//     </React.Fragment> 