import { Button } from "@/components/ui/button";
import { Container, Title, TopBar, Filters } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10 px-28">
        <Title text="Всі піци" size="lg" 
        className="font-extrabold" />
      </Container>

      <TopBar />  

      <Container className="pb-14 px-32 mt-10">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters/>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList 
              title="Піци" categoryId={1}
              items={[{
                id: 1,
                name: "Чізбургер-піца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                price: 550,
                items: [{price: 550}]
              },
              {
                id: 2,
                name: "Чізбургер-піца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                price: 550,
                items: [{price: 550}]
              },
              {
                id: 3,
                name: "Чізбургер-піца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                price: 550,
                items: [{price: 550}]
              },
              {
                id: 4,
                name: "Чізбургер-піца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                price: 550,
                items: [{price: 550}]
              },
              {
                id: 5,
                name: "Чізбургер-піца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                price: 550,
                items: [{price: 550}]
              },
              {
                id: 6,
                name: "Чізбургер-піца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                price: 550,
                items: [{price: 550}]
              },
              {
                id: 7,
                name: "Чізбургер-піца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                price: 550,
                items: [{price: 550}]
              },
              
              ]} />
              <ProductsGroupList 
              title="Комбо" categoryId={2}
              items={[{
                id: 8,
                name: "Чізбургер-піца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                price: 550,
                items: [{price: 550}]
              },
              {
                id: 9,
                name: "Чізбургер-піца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                price: 550,
                items: [{price: 550}]
              },
              {
                id: 10,
                name: "Чізбургер-піца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                price: 550,
                items: [{price: 550}]
              },
              {
                id: 11,
                name: "Чізбургер-піца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                price: 550,
                items: [{price: 550}]
              },
              {
                id: 12,
                name: "Чізбургер-піца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                price: 550,
                items: [{price: 550}]
              },
              {
                id: 13,
                name: "Чізбургер-піца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                price: 550,
                items: [{price: 550}]
              },
              {
                id: 14,
                name: "Чізбургер-піца",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                price: 550,
                items: [{price: 550}]
              },
              
              ]} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
