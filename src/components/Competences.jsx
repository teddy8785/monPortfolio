import "../styles/competences.css";
import data from "../projets.json";

function Competences() {

    const allTags = [...new Set(data.flatMap((projet)=> projet.tags).filter(Boolean))];
    
  return (
    <section className="competences" id="competences">
      <h2 className="competences__title ">MES COMPETENCES</h2>
      <div className="competences__content">
      <ul className="competences__list">
     {allTags.map((tag) =>(
        <li key={tag}>{tag}</li>
     ))}
     </ul>
      </div>
    </section>
  );
}

export default Competences;