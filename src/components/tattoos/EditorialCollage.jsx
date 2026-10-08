export default function EditorialCollage() {
    return (
      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16">
  
        <div className="grid grid-cols-12 gap-5">
  
          <div className="col-span-4 aspect-[3/4] rounded-xl border" />
  
          <div className="col-span-3 aspect-square rounded-xl border" />
  
          <div className="col-span-5 aspect-[4/3] rounded-xl border" />
  
          <div className="col-span-5 aspect-[5/4] rounded-xl border" />
  
          <div className="col-span-7 flex items-center justify-center rounded-xl border p-10">
  
            <h2 className="text-4xl font-light">
              Tattoos
            </h2>
  
          </div>
  
          <div className="col-span-6 aspect-[4/5] rounded-xl border" />
  
          <div className="col-span-6 flex items-center justify-center rounded-xl border p-10">
  
            <h2 className="text-4xl font-light">
              Tattoo Designs
            </h2>
  
          </div>
  
          <div className="col-span-3 aspect-square rounded-xl border" />
  
          <div className="col-span-5 aspect-[4/3] rounded-xl border" />
  
          <div className="col-span-4 aspect-[3/4] rounded-xl border" />
  
        </div>
  
      </section>
    )
  }