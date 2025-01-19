```javascript
// pages/index.js

// This is for demonstration purposes, you should fetch data dynamically
const data = {
  message: "Hello World! Updated",
};

export default function Home() {
  return (
    <div>{data.message}</div>
  );
}

export async function getStaticProps(context) {
  // Fetch external data from a data source
  const res = await fetch('https://your-data-source.com/api/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}
```