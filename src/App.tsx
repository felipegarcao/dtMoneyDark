import { ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./contexts/TransactionContenxt";
import { Transactions } from "./pages/Transactions";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
    <TransactionsProvider>
      <Transactions />
    </TransactionsProvider>
    </ThemeProvider>
  )
}


