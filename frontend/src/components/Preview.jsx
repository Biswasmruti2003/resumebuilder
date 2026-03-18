export default function Preview({ data }) {
  return (
    <div className="col-md-8 p-2 border">
      <h2>{data.name}</h2>
      <p>{data.email}</p>

      <h3>Summary</h3>
      <p>{data.summary}</p>

      <h3>Skills</h3>
      <ul>
        {data.skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}