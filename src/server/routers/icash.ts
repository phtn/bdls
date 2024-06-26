import { createCheckoutSession } from "../icash/checkout";
import { checkoutProcedure } from "../procedures/icash";
import { router } from "../trpc";

export const iCashRouter = router({
  createCheckout: checkoutProcedure.query(async ({ input }) => {
    return await createCheckoutSession(input).then((res) => {
      const data = res.data[0];
      const status = res.status;
      return { data, status };
    });
  }),
});
