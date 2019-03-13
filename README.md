# React IFrame Form

This package allows to render and send form to rendered iframe.  
It can be used to render payment pages on your page.

Written on [TypeScript](https://www.typescriptlang.org)

## Installation
Using [npm](https://npmjs.com/package/react-iframe-form)
```bash
npm i react-iframe-form
```

## Usage
For example, rendering [Portmone.com](https://portmone.com) payment form:
```typescript jsx
import * as React from "react"
import * as IFrame from "./src";

export const PaymentView: React.FunctionComponent = () => {
    const url = "https://www.portmone.com.ua/gateway/";
    const method = "post";
    const data = {
        bodyRequest: {
            order: {
                description:"191237564",
                shopOrderNumber: "SHP-00000111",
                billAmount: 100,
                billCurrency: "UAH",
            },
        },
        typeRequest: "json"
    };
    
    return <IFrame.Form name="paymentForm" config={{ url, method, data }} />;
};
```
Will render:
```html
<form target="paymentForm" action="https://www.portmone.com.ua/gateway/" method="post">
    <input 
        type="hidden" 
        name="bodyRequest" 
        value="{&quot;order&quot;:{&quot;description&quot;:&quot;191237564&quot;,&quot;shopOrderNumber&quot;:&quot;SHP-00000111&quot;,&quot;billAmount&quot;:100,&quot;billCurrency&quot;:&quot;UAH&quot;}}"
    />
    <input type="hidden" name="typeRequest" value="json" />
</form>
<iframe name="paymentForm" />
```
In followed example form will be sent to iframe on component mount. 

### AsyncForm
If your form configuration have to be loaded async, you may use *Promise* and [AsyncForm](./src/AsyncForm.tsx):
```typescript jsx
import * as React from "react"
import * as IFrame from "./src";

export const PaymentView = () => {
    const fetchConfig = fetch("https://your-api.com/payment")
        .then((response): IFrame.Config => response.json());
    
    return <IFrame.AsyncForm name="paymentForm" fetchConfig={fetchConfig} />;
};
```

## Contributors
- [Alexander <horat1us> Letnikow](mailto:reclamme@gmail.com)

## License
[MIT](./LICENSE)
