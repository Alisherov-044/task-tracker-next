import Link from "next/link";

export default function About() {
  return (
    <main className="main">
      <div className="wrapper">
        <h5 className="text">version: 1.0.0</h5>
        <h5 className="text">release: 2023</h5>
        <h5 className="text">framework: Next js</h5>
        <Link className="link" href="/">
          go back
        </Link>
      </div>
    </main>
  );
}
