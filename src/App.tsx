import Button from "@/components/ui/button/button"

export function App() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="text-4xl font-medium tracking-tight">
            Project ready!
          </h1>
          <p className="leading- mt-2 leading-snug tracking-tight">
            You may now add components and start building. We&apos;ve already
            added the button component for you.
          </p>
          <Button
            variant="default"
            className="mt-4"
            onClick={() => console.log("Hello World!")}
          >
            Click me
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
