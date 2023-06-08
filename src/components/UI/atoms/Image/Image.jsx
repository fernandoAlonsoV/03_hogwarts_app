const Image = ({ source, altName }) => {
  const imageStyle = {
    width: "200px",
    height: "200px",
  };
  return <img 
        style={imageStyle}
        src={source} 
        alt={altName} 
    />;
};

export default Image;
