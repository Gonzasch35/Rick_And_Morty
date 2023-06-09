export default function Card({id, name, status, species, gender, image, onClose}) {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" />
      </div>
   );
}
