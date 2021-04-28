import { Transactions, TransactionDetail  } from 'container/pages'

const appRoutes = [
  {
    id: 1,
    path: "/",
    component: Transactions,
    exact: true
  },
  {
    id: 2,
    path: "/:id",
    component: TransactionDetail,
    exact: true
  },
]

export default appRoutes;