function Card({ children }) {
  return <div className='shadow rounded-lg overflow-hidden bg-white'>{children}</div>;
}

function Title({ children }) {
  return (
    <div className='p-4 border-b'>
      <h1 className='text-xl'>{children}</h1>
    </div>
  );
}

function Body({ children }) {
  return <div className='p-4 leading-relaxed'>{children}</div>;
}

function Footer({ children }) {
  return <div className='p-4 bg-slate-50 flex justify-between'>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
