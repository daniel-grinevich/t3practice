import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/b116a2d2-a43b-4f08-a0b7-63c3f4186875-cf5xva.png",
  "https://utfs.io/f/1d0695ff-195e-4646-9eed-91732c14ab8e-k40dag.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
     <div className="flex flex-wrap gap-4">
      {mockImages.map((image) => (
        <div key={image.id} className="w-48 p-4">
          <img src={image.url}/>
        </div>  
      ))}
      </div>  
    </main>
  );
}
