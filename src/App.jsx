import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import './App.css'
import { Terminal } from "lucide-react";

function App() {
  return (
    <div>
      <Alert >
          <Terminal className="h-4 w-4" />
          <AlertTitle>Testing alert</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sed nihil soluta eos neque ducimus ea sint.  
          </AlertDescription>  
        </Alert> 

        <AlertDialog>
          <div className="searchContainer flex items-center justify-center relative">
            <Input type="text" placeholder="Search..." className="border-black border-2"/>
            <AlertDialogTrigger>
              <Button variant="default" className="absolute right-0 top-0">Search</Button>
            </AlertDialogTrigger>
          </div>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    </div>
  )
}

export default App
