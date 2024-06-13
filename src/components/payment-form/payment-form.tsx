// Dependencies
import * as React from 'react';

// Internals
import { FormProvider } from '../../contexts/form';
import type { PaymentFormProps } from './payment-form.types';
import { CreditCardButton } from '../credit-card';

function RenderPaymentForm(
  {
    validateBeforeTokenization,
    applicationId,
    cardTokenizeResponseReceived,
    locationId,
    children,
    formProps = {
      'aria-label': 'Payment form',
      id: 'rswps-form',
    },
    overrides,
    ...props
  }: PaymentFormProps,
  ref: React.LegacyRef<HTMLDivElement>
) {
  return (
    <FormProvider
      {...props}
      applicationId={applicationId}
      cardTokenizeResponseReceived={cardTokenizeResponseReceived}
      locationId={locationId}
      overrides={overrides}
    >
      <div data-testid="rswps-form" {...formProps} ref={ref} role="form">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && (child.type === CreditCardButton || (child.type as any).displayName === 'CreditCardButton')) {
            return React.cloneElement(child, {
              // @ts-ignore
              canProceed: validateBeforeTokenization,
            });
          }
          return child;
        })}
      </div>
    </FormProvider>
  );
}

const PaymentForm = React.forwardRef<HTMLDivElement, PaymentFormProps>(RenderPaymentForm);

export default PaymentForm;
export { useForm } from '../../contexts/form';
export * from './payment-form.types';