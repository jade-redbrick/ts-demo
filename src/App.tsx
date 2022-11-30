import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashBoard from "./DashBoard";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DashBoard />
    </QueryClientProvider>
  );
}

export default App;
