export default function Home({ message }) {
  return (
    <main style={{ maxWidth: 600, margin: "3rem auto", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1>{message}</h1>
    </main>
  );
}

// This function runs at build time and provides props to the page
export async function getStaticProps() {
  return {
    props: {
      message: "Welcome to travvels (Static Site Generation)",
    },
  };
}
