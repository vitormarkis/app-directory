export default async function ProductPage({ params }: any) {
  const { slug } = params;

  const response = await fetch('http://localhost:3000/api/hello', {
    body: JSON.stringify(slug),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  const helloRes = await fetch('http://localhost:3000/api/hello');

  const hello = await helloRes.json();
  const data = await response.json();

  return (
    <div>
      <h1>{JSON.stringify(data, null, 2)}</h1>
      <pre>{JSON.stringify(hello, null, 2)}</pre>
    </div>
  );
}
