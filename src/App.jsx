import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import './App.css'
import { Terminal } from "lucide-react";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="searchContainer flex items-center justify-center relative">
        <Input type="file" disabled placeholder="search..." className="border-black border-2"/>
        <Button variant="default" className="absolute right-0">Search</Button>     
      </div>
    
    <div>
      <Alert >
          <Terminal className="h-4 w-4" />
          <AlertTitle>Testing alert</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sed nihil soluta eos neque ducimus ea sint.  
          </AlertDescription>  
        </Alert> 
    </div>
    </>
  )
}

export default App
