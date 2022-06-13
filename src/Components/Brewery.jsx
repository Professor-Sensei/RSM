const Brewery = (props) => {
  return (
    <div>
      <h2>{props.item?.name}</h2>
      <span>{props.item?.brewery_type}</span>
      <span>ADDRESS</span>
      <span>
        <a href={props.item?.website_url} target='_blank'>
          {props.item?.website_url}
        </a>
      </span>
      <span>{props.item?.phone}</span>
    </div>
  );
};

export default Brewery;
