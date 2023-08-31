export function Author({
  name,
  bio,
  atama,
}: {
  name: string;
  bio: string;
  atama: object;
}) {
  return (
    <div {...atama}>
      <strong>{name}</strong>
      <p>{bio}</p>
    </div>
  );
}
