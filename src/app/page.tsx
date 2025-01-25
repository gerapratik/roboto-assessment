import Hero from "@/components/hero";
import ProductGrid from "@/components/product-grid";
import { pageData } from "@/data/mock";
import Navbar from "@/components/navbar";
import hero from "../images/hero.png";
import { CategoryPage } from "@/components/category-page";
import FooterWithData from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />

      <Hero imageSrc={hero} />
      <CategoryPage {...pageData.category_1} />
      <CategoryPage {...pageData.category_2} />
      <ProductGrid
        heading={pageData.productGrids.lighting.heading}
        products={pageData.productGrids.lighting.products}
        gridType="lighting"
      />
      <ProductGrid
        heading={pageData.productGrids.stories.heading}
        products={pageData.productGrids.stories.products}
        gridType="stories"
      />
      <CategoryPage {...pageData.category_3} />
      <ProductGrid
        heading={pageData.productGrids.furniture.heading}
        products={pageData.productGrids.furniture.products}
        gridType="furniture"
      />
      <CategoryPage {...pageData.category_4} />
      <ProductGrid
        heading={pageData.productGrids.more.heading}
        products={pageData.productGrids.more.products}
        gridType="lighting"
      />
      <CategoryPage {...pageData.category_5} />
      <FooterWithData />
    </main>
  );
}
