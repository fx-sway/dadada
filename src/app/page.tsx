"use client";

export default function HomePage() {
  return (
    <main className="grid grid-cols-4 gap-4">
      <input
        type="file"
        onChange={async (e) => {
          const file = e.target.files![0];
          const buffer = await file.arrayBuffer();
          const encoded = Buffer.from(buffer).toString("base64");
          console.log(encoded);
        }}
      />
    </main>
  );
}
