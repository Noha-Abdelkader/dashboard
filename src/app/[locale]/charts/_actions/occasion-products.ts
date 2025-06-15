"use server";

export async function occasionProductsAction(id:string){
  const response = await fetch(
    process.env.BASE_URL_FLOWER + "/api/v1/products?occasion=" + id
  );
  const payload = await response.json();
  return payload;
}