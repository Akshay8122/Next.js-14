export default function ProductInfo({
  params,
}: {
  params: { productId: string };
}) {
  return <h1> This is details about product {params.productId} </h1>;
}
