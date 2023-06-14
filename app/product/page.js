export default function ProductPage(props) {
  const { searchParams } = props;

  const { price_id } = props;

  console.log(searchParams);
  console.log(price_id);

  return(
    <div>
      Hello, this is the Product Page.
    </div>
  )
}