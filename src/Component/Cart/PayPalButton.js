
import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

export default class MyApp extends React.Component {
  render() {
    const onSuccess = payment => {
     
      console.log("The payment was succeeded!", payment);
      this.props.clearCart();
      this.props.history.push("/");
    };

    const onCancel = data => {
      console.log("The payment was cancelled!", data);
    };

    const onError = err => {
      
      console.log("Error!", err);
     
    };

    let env = "sandbox"; 
    let currency = "USD"; 
    
    const client = {
      sandbox: "AUU435AxqH3SiWf5Jj44Ezve35ELf_8TQCt-ZX4ipMQGalxds4eKGhq1U_RhB-b5PlIeAfgh8rjcfmVn",
      production: "YOUR-PRODUCTION-APP-ID"
    };
  
    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={this.props.totalAmount}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    );
  }
}
