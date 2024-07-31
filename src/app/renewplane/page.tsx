// PaymentForm.tsx
import { ButtonArrow } from '@/utils/svgicon';
import React from 'react';

const PaymentForm = () => {
  return (
    <>
      <h1 className="font-antic text-[#283C63] text-[30px] leading-[1.2em] mb-[25px] lg:text-[40px] lg:mb-[50px]">
      Renew Plan
    </h1>
    <div className='bg-white py-[25px] px-[15px] rounded-[10px] lg:p-[40px]'> 
    <h2 className=''>Select your Plan</h2>
    <form
      acceptCharset="UTF-8"
      action=""
      method="post"
      id="payment-form"
      className="space-y-8" 
    >

      <div className="Plane-widget !mt-[10px]">
        <p className="max-w-[1000px] w-full">
          Your previous plan is already selected. If you cannot change your plan, please ignore this message. If you can make a change, please select from the options below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[15px]">
          <div className="form-group card-label max-w-[430px] w-full">
            <select name="about_plane" className="w-full">
              <option value="Video , Messaging" selected>
                Video , Messaging
              </option>
              <option value="Messaging">Messaging</option>
              <option value="Video , Messaging , Workshops">Video , Messaging , Workshops</option>
            </select>
          </div>
        </div>
      </div>

      <div className="payment-widget max-w-[840px] w-full">
        <h3>Payment Method</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="form-group card-label">
                <input type="text" id="card_name" placeholder="Name on Card" className="w-full" />
            </div>
            <div className="form-group card-label"> 
                <input
                type="text"
                id="cardNumber"
                className="w-full"
                placeholder=" Card Number"
                maxLength={19} 
                /> 
            </div>
          </div>
        <div className="flex flex-wrap gap-4 mt-4">
          
          <div className="form-group card-label max-w-[230px] w-full">
            <input type="text" id="cvc" className="w-full" placeholder="CVV" maxLength={13} />
          </div>
          <div className="form-group card-label max-w-[185px] w-full">
            <input
              type="text"
              id="expiration"
              className="w-full"
              placeholder="Expiry Month"
              maxLength={2}
            />
          </div>
          <div className="form-group card-label max-w-[185px] w-full">
            <input type="text" id="Year" className="w-ful" placeholder="Expiry Year" maxLength={4} />
          </div>
        </div>

        <div className="submit-section mt-4">
          <button type="submit" className="button">
            Confirm and Pay <ButtonArrow />
          </button>
        </div>
      </div>
    </form>
    </div>
    </>
  );
};

export default PaymentForm;
