import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Routes from "./routes/Routes";

const App = () => {
  const queryClient = new QueryClient();
  const isDevEnvironment = process.env.REACT_APP_ENVIRONMENT === "development";
  const openDevtoolsInitially = false;

  const renderDevTools = isDevEnvironment && <ReactQueryDevtools />;

  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <ReactQueryDevtools initialIsOpen={openDevtoolsInitially} />
      {renderDevTools}
    </QueryClientProvider>
  );
};

export default App;
