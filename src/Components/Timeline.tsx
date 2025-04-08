
import family from '../family.svg';

const milestones = [
  { title: "Baby's birth", image: family}
];

const Timeline = () => (
  <div className="timeline-wrapper">
    <div className="timeline">
      {milestones.map((milestone, key) => (
        <main>
            <div key={key} style={{background: "#173F4B", width: "130px", height: "136px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)"}}>
                <img src={milestone.image} alt="Family" />
                <p style={{textAlign: "center"}}>Baby's birth</p>
            </div>
       </main>
      ))}
    </div>
  </div>
);
export default Timeline;