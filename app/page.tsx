import Hello from "@/app/components/hello";

export default function Home() {
  console.log("What am I doing here? -- SERVER COMPONENT");
  return (
      <>
        <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
        <Hello />
      </>
  );
}
