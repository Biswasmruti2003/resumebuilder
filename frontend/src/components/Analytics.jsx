export default function Analytics({ data }) {
  const text = data.name + data.email + data.summary + data.skills.join(" ");

  const words = text.trim().split(/\s+/).length;
  const characters = text.length;

  return (
    <div>
      <h2>Analytics</h2>
      <p>Words: {words}</p>
      <p>Characters: {characters}</p>
    </div>
  );
}