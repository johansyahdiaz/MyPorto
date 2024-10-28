const Card = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="card card-compact bg-[#6EACDA] w-80 md:w-80 lg:w-96 shadow-xl">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-[#03346E] text-[#E2E2B6]" onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
