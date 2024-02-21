import Image from "next/image";
/*import styles from "@/styles/index.module.css";

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


import Footer from './components/Footer';
export default function Home() {
  return (
    <div className="bg-blue-100"> {/* Cambia bg-blue-100 por el color que desees */}
      <div className="py-8">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
             Diego Ordaz Rios
          </h1>
          <p>
          <Image
             src="https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987265163-9XILMVT3TK4HZ5X6538M/VH_01_1080pjpg.jpg"
             alt="Auto deportivo"
             width={400}
             height={300}
             className="rounded-lg"
           />
           </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};



