/*import Image from "next/image";
import styles from "@/styles/index.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="#">Home</a>
          <a href="#">Acerca</a>
        </nav>
        <center>
          <h1>
            HOLA MI NOMBRE ES DIEGO ORDAZ
          </h1>
        </center>
      </div>
    
    </main>
  );
}*/

// pages/index.js

// pages/index.js

import Header from '../components/Header';


const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Esta es mi página. Soy Diego Ordaz Rios
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;


