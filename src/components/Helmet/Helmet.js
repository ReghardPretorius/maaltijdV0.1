const Helmet = (props) => {
    document.title = "Maaltijd";
    return <div className="w-100">{props.children}</div>;
  };
  
  export default Helmet;