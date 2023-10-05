type MainImageProps = {
  image: string |undefined;
};

const MainImage = (props: MainImageProps) => {
  return (
    <div>
      <img src={props.image}></img>
    </div>
  );
};

export default MainImage;
