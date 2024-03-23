// app/shop/page.tsx
export default async function Shop() {
  const products: any[] = [{ id: 1, name: 'one'}, { id: 2, name: 'two'}]

  return (
    <div>
      <h1 className="widget-title">Shop</h1>

      <div className="grid grid-cols-3 gap-6 ">
      {
        products?.map((p) => {
          return <div key={p.id} >
            <div className="flex flex-col items-center gap-3 border border-slate-700 rounded-xl p-4 hover:bg-slate-800 transition">
              {p.name}
            </div>
          </div>
        })
      }
      </div>
    </div>
  );
}
