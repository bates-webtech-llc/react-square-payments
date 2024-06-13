# React Square Payments

React Square Payments is a React component library that provides a simple and intuitive way to integrate Square payments into your React applications.

Majority of the work was created by [https://github.com/weareseeed/react-square-web-payments-sdk/tree/main](https://github.com/weareseeed/react-square-web-payments-sdk/tree/main). We had some changes we wanted to make to the library, so we decided to create our own version.

Notable changes:

-   Added support for external buttons. https://github.com/weareseeed/react-square-web-payments-sdk/pull/104
-   Added validateBeforeTokenization prop to the main wrapper component. This allows easier validation with custom logic before the tokenization process and allows you to render errors easier.
-   Removed stitches dependency
-   Currently only supporting credit card payments but may add the other methods in later versions.