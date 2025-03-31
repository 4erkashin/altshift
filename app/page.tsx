import { default as Logo } from "./logo.svg";

export default function Home() {
  console.log(Logo);
  return (
    <main>
      <Logo />
      <p>This text should use Fixel Text (body font).</p>
      <h1>This heading should use Fixel Display.</h1>
    </main>
  );
}
