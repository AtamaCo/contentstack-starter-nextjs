import styles from "./author.module.css";

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
    <div {...atama} className={styles.author}>
      <h3 className={styles.heading}>{name}</h3>
      <p>{bio}</p>
    </div>
  );
}
