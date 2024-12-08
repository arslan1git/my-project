import Image from "next/image";
import Link from "next/link";

const styles = [
  {
    name: "Casual",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    href: "/shop?style=casual"
  },
  {
    name: "Formal",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    href: "/shop?style=formal"
  },
  {
    name: "Party",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93",
    href: "/shop?style=party"
  },
  {
    name: "Gym",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb",
    href: "/shop?style=gym"
  }
];

export default function BrowseByStyle() {
  return (
    <section className="container">
      <h2 className="text-2xl font-bold mb-8 md:text-3xl">BROWSE BY DRESS STYLE</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {styles.map((style) => (
          <Link
            key={style.name}
            href={style.href}
            className="group relative aspect-[3/4] overflow-hidden rounded-lg"
          >
            <Image
              src={style.image}
              alt={style.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{style.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}



// return (
//     <section className="container max-w-6xl mx-auto bg-slate-400">
//       <h2 className="text-2xl font-bold mb-8 md:text-3xl">BROWSE BY DRESS STYLE</h2>
//       <div className="grid md:grid-cols-1 sm:grid-cols-2 px-8">
//         <div className="grid grid-cols-2 gap-4">
//         <Image src="/DressStyle1.png" alt="" width={300} height={300}
//         className="w-[70%] h-[90%] object-center" />
//         <Image src="/DressStyle2.png" alt="" width={300} height={600} 
//         className="w-[100%] h-[100%] object-center"/>
        
//         <Image src="/DressStyle3.png" alt="" width={500} height={500} />
//         <Image src="/DressStyle4.png" alt="" width={400} height={400} />
//         </div>
      
//       </div>
//     </section>