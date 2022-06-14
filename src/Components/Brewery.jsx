import './Brewery.css';

const Brewery = (props) => {
  const phone = props.item?.phone
    ? `${props.item.phone.slice(-10, -7)}-${props.item.phone.slice(
        -7,
        -4
      )}-${props.item.phone.slice(-3)}`
    : '';

  return props.item ? (
    <div className='brewery'>
      <h2>{props.item.name}</h2>
      <div>Type: {props.item.brewery_type}</div>
      <div>{props.item.street}</div>

      <div>
        <a href={props.item.website_url} target='_blank'>
          {props.item.website_url}
        </a>
      </div>
      <div>{phone}</div>
    </div>
  ) : (
    <></>
  );
};

export default Brewery;
