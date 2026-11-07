import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";

export default function Home() {
  const name = null;
  const isLoaded = false;
  return (
    <>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>გამარჯობა, {name || "Unknown"}</h1> */}
        {/* <h2>{isLoaded && "მთავარი გვერდი ჩაიტვირთა!"}</h2> */}
        {/* <h2>
          {isLoaded === true
            ? "მთავარი გვერდი ჩაიტვირთა"
            : "გვერდი იტვირთება..."}
        </h2>
        {3 + 7} */}
      </main>
    </>
  );
}
