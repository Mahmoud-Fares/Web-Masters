import { Button } from '@/components/ui/button';

function App() {
   [].map((item) => {
      console.log(item);
      let a = 'a';
      let b = 'b';

      let c = `${a} ${b}`;
      console.log(c);
   });
   return (
      <>
         <div className="flex h-screen flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <Button>Click me</Button>
         </div>
      </>
   );
}

export default App;
