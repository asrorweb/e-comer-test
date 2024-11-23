import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";

import DemoSlider from "@/components/demo-slider";

export default async function Home() {
  const supabase = await createClient();
  const { data: product, error } = await supabase.from("product").select();

  if (error) {
    console.error(error);
    return <div>Error fetching data</div>;
  }

  return (
    <main>
      <Hero product={product[0]} />
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-9 mx-auto">
          <h2 className="scroll-m-20 inline-block border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">Products</h2>

          <DemoSlider data={product} />

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-5">
            {product?.map((el) => (
              // <LensDemo key={el.id} product={el} />
              <ProductBlog key={el.id} product={el} />
            ))}
          </div> */}
          <Button size={"lg"} variant={"outline"} className="w-full">
            More Products
          </Button>
        </div>
      </section>
    </main>
  );
}
